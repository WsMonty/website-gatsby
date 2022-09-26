import React from 'react';
import { store } from '../../store';
import {
  deleteFromCart,
  showPayment,
  addShipping,
} from '../../reducers/cartReducer';
import { BsTrashFill } from 'react-icons/bs';

const ShoppingCart = ({ props }) => {
  const cart = props.cart;
  const state = props.showCart;

  const transformTitle = (title) => {
    return title
      .split('-')
      .map((str) => str[0].toUpperCase() + str.slice(1))
      .join()
      .replaceAll(',', ' ');
  };

  const deleteHandler = (e) => {
    store.dispatch(
      deleteFromCart(e.target.closest('.shoppingCart_delete_btn').dataset.title)
    );
  };

  const paymentBtnHandler = () => {
    store.dispatch(showPayment(true));
  };

  const shippingSelected = () => {
    return document.querySelector('.paypal_shipping').selectedIndex > 0;
  };

  return (
    <div className={`shoppingCart ${state}`}>
      {Object.keys(cart).length > 0 ? (
        <div className="shoppingCart_content">
          {Object.keys(cart).map((cd) => {
            return (
              <div key={cd} className="shoppingCart_cd">
                <h2 className="shoppingCart_title">{transformTitle(cd)}</h2>
                <p className="shoppingCart_count">x{cart[cd]}</p>
                <button
                  className="shoppingCart_delete_btn"
                  onClick={(e) => deleteHandler(e)}
                  data-title={cd}
                >
                  <BsTrashFill />
                </button>
              </div>
            );
          })}
          <select className="paypal_shipping" id="item-options" required>
            <option value="" hidden>
              Select shipping
            </option>
            <option value="Shipping to Germany" price={1.6}>
              Shipping to Germany - 1.60 EUR
            </option>
            <option value="Shipping International" price={3.7}>
              Shipping International - 3.70 EUR
            </option>
          </select>
          <button
            className="shoppingCart_payment_btn"
            onClick={() => {
              if (!shippingSelected()) {
                alert('Please select shipping');
                return;
              }
              const shipping =
                document.querySelector('.paypal_shipping').value ===
                'Shipping to Germany'
                  ? 1.6
                  : 3.7;

              store.dispatch(addShipping(shipping));

              paymentBtnHandler();
            }}
          >
            Proceed to payment
          </button>
        </div>
      ) : (
        <p>Noting in cart yet.</p>
      )}
    </div>
  );
};

export default ShoppingCart;
