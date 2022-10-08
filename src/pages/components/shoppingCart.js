import React from 'react';
import { store } from '../../store';
import {
  deleteFromCart,
  showPayment,
  showUserEntryPage,
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
    store.dispatch(showUserEntryPage(true));
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

          <button
            className="shoppingCart_payment_btn"
            onClick={() => {
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
