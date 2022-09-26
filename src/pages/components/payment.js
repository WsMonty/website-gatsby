import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useSelector } from 'react-redux';
import { selectShipping, store } from '../../store';
import { showPayment } from '../../reducers/cartReducer';

const Payment = ({ cart }) => {
  const shipping = useSelector(selectShipping);

  const totalPrice = () => {
    const totalCDs = Object.keys(cart)
      .map((cd) => cart[cd])
      .reduce((acc, count) => (acc += count));

    return +shipping + totalCDs * 15;
  };

  return (
    <div className="payment">
      <h3 className="payment_total">
        Total amount to pay: {totalPrice().toFixed(2).replace('.', ',')}€ (CDs:{' '}
        {(totalPrice() - +shipping).toFixed(2).replace('.', ',')}€ + Shipping:{' '}
        {shipping.toFixed(2).replace('.', ',')}€)
      </h3>
      <PayPalScriptProvider
        options={{
          'client-id':
            'AZuOJhphk2lqHP76TcBJzx9pernNN8M0ZphLh8u04xv8HCLCF-KzP-FKie_mLKYAdLf3N-59ZqRzgQWq',
          currency: 'EUR',
        }}
      >
        <PayPalButtons
          style={{ color: 'gold' }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: totalPrice(),
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            store.dispatch(showPayment(false));
            return actions.order.capture().then((details) => {
              const name = details.payer.name.given_name;
              alert(
                `Thank you for your order, ${name}! You will get your CD(s) within a week.`
              );
            });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default Payment;
