import React from 'react';
import CountryList from './countryList';
import { showUserEntryPage, addShipping } from '../../reducers/cartReducer';
import { store } from '../../store';

const UserEntry = () => {
  const submitForm = (e) => {
    e.preventDefault();
    const country = document.querySelector('.userentry_select')?.value;
    const shipping = country === 'Germany' ? 1.6 : 3.7;

    store.dispatch(addShipping(shipping));

    store.dispatch(showUserEntryPage(false));
  };

  return (
    <div className="userentry">
      <form className="userentry_form" onSubmit={(e) => submitForm(e)}>
        <h2>Enter your shipping country:</h2>

        <CountryList />
        <h3>
          Shipping Cost to Germany: 1,60€. <br /> All other countries: 3,70€
        </h3>
        <button
          className="userentry_submitbtn card_shop_cancel_btn"
          type="submit"
        >
          Proceed to payment
        </button>
      </form>
    </div>
  );
};

export default UserEntry;
