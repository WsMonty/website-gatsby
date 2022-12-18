import React, { useState } from 'react';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { StaticImage } from 'gatsby-plugin-image';
import { FaShoppingCart } from 'react-icons/fa';
import {
  store,
  selectPayment,
  selectCart,
  selectUserEntry,
  selectTotalPrice,
} from '../store';
import {
  addToCart,
  goBackDev,
  totalPriceAdd,
} from '../reducers/cartReducer.js';
import ShoppingCart from './components/shoppingCart';
import { useSelector } from 'react-redux';
import Payment from './components/payment';
import UserEntry from './components/userEntry';

const Shop = () => {
  const cart = useSelector(selectCart);

  const [showCart, setShowCart] = useState('hidden');

  const paymentBool = useSelector(selectPayment);
  const userEntryBool = useSelector(selectUserEntry);

  const addToCartHandler = (e) => {
    const cd = e.target.dataset.title;
    const price = e.target.dataset.price;
    store.dispatch(addToCart(cd));
    store.dispatch(totalPriceAdd(price));
    setShowCart('');
  };

  const cartIconHandler = () => {
    showCart === 'hidden' ? setShowCart('') : setShowCart('hidden');
  };

  const goBackDevelopment = () => {
    store.dispatch(goBackDev());
  };

  return (
    <div className="cards">
      <GatsbySeo
        title="Gilles Grethen | Shop"
        description={`Gilles Grethen's webshop for buying his CDs.`}
        language="en"
        noindex={false}
        nofollow={false}
      />
      {paymentBool ? (
        <div className="card card_shop">
          <div className="card_shop_content">
            {userEntryBool ? <UserEntry /> : <Payment cart={cart} />}

            <button
              className="card_shop_cancel_btn"
              onClick={goBackDevelopment}
            >
              Back to the shop
            </button>
          </div>
        </div>
      ) : (
        <div className="card card_shop">
          <button onClick={cartIconHandler} className="card_shop_cart_icon_btn">
            <FaShoppingCart className="card_shop_cart_icon" />
          </button>
          <ShoppingCart props={{ showCart, cart }} />
          <div className="card_shop_content">
            <div className="card_shop_article">
              <StaticImage
                className="card_shop_cover"
                src="../imgs/SoM-cover.jpeg"
                alt="State of Mind Cover"
              />
              <div className="card_shop_article_information">
                <h2 className="card_shop_title">
                  State of Mind VINYL - Gilles Grethen Quartet (2022, Double LP)
                </h2>
                <h3 className="card_shop_price">35,00€ + shipping cost</h3>
                <button
                  className="card_shop_addToCart_btn"
                  onClick={(e) => addToCartHandler(e)}
                  data-title="state-of-mind-LP"
                  data-price="35"
                >
                  Add to cart
                </button>
              </div>
            </div>
            <hr />
            <div className="card_shop_article">
              <StaticImage
                className="card_shop_cover"
                src="../imgs/SoM-cover.jpeg"
                alt="State of Mind Cover"
              />
              <div className="card_shop_article_information">
                <h2 className="card_shop_title">
                  State of Mind CD - Gilles Grethen Quartet (2022, Digipack)
                </h2>
                <h3 className="card_shop_price">15,00€ + shipping cost</h3>
                <button
                  className="card_shop_addToCart_btn"
                  onClick={(e) => addToCartHandler(e)}
                  data-title="state-of-mind-CD"
                  data-price="15"
                >
                  Add to cart
                </button>
              </div>
            </div>
            <hr />
            <div className="card_shop_article">
              <StaticImage
                className="card_shop_cover"
                src="../imgs/cover-timeSuite.jpeg"
                alt="Time Suite Cover"
              />
              <div className="card_shop_article_information">
                <h2 className="card_shop_title">
                  Time Suite CD - Gilles Grethen Quartet (2021, Digipack)
                </h2>
                <h3 className="card_shop_price">15,00€ + shipping cost</h3>
                <button
                  className="card_shop_addToCart_btn"
                  onClick={(e) => addToCartHandler(e)}
                  data-title="time-suite"
                  data-price="15"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
