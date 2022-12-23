import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useSelector } from 'react-redux';
import { selectShipping, store, selectTotalPrice } from '../../store';
import { showPayment } from '../../reducers/cartReducer';

const Payment = ({ cart }) => {
  const shipping = useSelector(selectShipping);
  const price = useSelector(selectTotalPrice);
  const totalPrice = +price + +shipping;

  console.log(shipping);

  return (
    <div className="payment">
      <h3 className="payment_total">
        Total amount to pay: {(price + shipping).toFixed(2).replace('.', ',')}€
        (CDs and/or LPs: {price.toFixed(2).replace('.', ',')}€, shipping:{' '}
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
                    value: totalPrice,
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
