import React, { useState } from 'react';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { StaticImage } from 'gatsby-plugin-image';
import { FaShoppingCart } from 'react-icons/fa';
import { store, selectPayment, selectCart } from '../store';
import { addToCart, goBackDev } from '../reducers/cartReducer.js';
import ShoppingCart from './components/shoppingCart';
import { useSelector } from 'react-redux';
import Payment from './components/payment';

const Shop = () => {
  const cart = useSelector(selectCart);

  const [showCart, setShowCart] = useState('hidden');

  const paymentBool = useSelector(selectPayment);

  const addToCartHandler = (e) => {
    const cd = e.target.dataset.title;
    store.dispatch(addToCart(cd));
    setShowCart('');
  };

  const cartIconHandler = () => {
    showCart === 'hidden' ? setShowCart('') : setShowCart('hidden');
  };

  const goBackDevelopment = () => {
    store.dispatch(goBackDev());
  };

  const nothing = () => {};

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
            <Payment cart={cart} />
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
                  State of Mind - Gilles Grethen Quartet (2022, Digipack)
                </h2>
                <h3 className="card_shop_price">15,00€ + shipping cost</h3>
                <button
                  className="nothing"
                  onClick={nothing}
                  data-title="state-of-mind"
                >
                  Available from 21st october!
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
                  Time Suite - Gilles Grethen Quartet (2021, Digipack)
                </h2>
                <h3 className="card_shop_price">15,00€ + shipping cost</h3>
                <button
                  className="card_shop_addToCart_btn"
                  onClick={(e) => addToCartHandler(e)}
                  data-title="time-suite"
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
