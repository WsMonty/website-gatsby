import { StaticImage } from 'gatsby-plugin-image';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import React from 'react';

const Shop = (props) => {
  return (
    <div className="cards">
      <div className="card card_paypal">
        <div className="card_content">
          <StaticImage
            src="../imgs/cover-timeSuite.jpeg"
            alt="Time Suite Cover"
            placeholder="blurred"
            className="paypal_img"
          />
          <div id="smart-button-container">
            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <h3 className="paypal_title">CD Time Suite (Digipack):</h3>
                <h4>15€ + Shipping costs (select your country!)</h4>
                <select className="paypal_shipping" id="item-options">
                  <option value="Shipping to Germany" price="16.00">
                    Shipping to Germany - 1.60 EUR
                  </option>
                  <option value="Shipping International" price="18.70">
                    Shipping International - 3.70 EUR
                  </option>
                </select>
                <select
                  aria-label="select-shop"
                  style={{ visibility: 'hidden' }}
                  id="quantitySelect"
                ></select>
                <PayPalScriptProvider
                  options={{
                    'client-id':
                      'AZuOJhphk2lqHP76TcBJzx9pernNN8M0ZphLh8u04xv8HCLCF-KzP-FKie_mLKYAdLf3N-59ZqRzgQWq',
                    currency: 'EUR',
                  }}
                >
                  <PayPalButtons
                    style={{ color: 'black' }}
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: `${
                                document.querySelector('.paypal_shipping')
                                  .value === 'Shipping to Germany'
                                  ? 16.6
                                  : 18.7
                              }`,
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={(data, actions) => {
                      return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                      });
                    }}
                  />
                </PayPalScriptProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
