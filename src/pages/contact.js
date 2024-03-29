import React from 'react';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

const Contact = (props) => {
  return (
    <div className="cards">
      <GatsbySeo
        title="Gilles Grethen | Contact"
        description={`Gilles Grethen's contact information for management and booking.`}
        language="en"
        noindex={false}
        nofollow={false}
      />
      <div className="card card_contact">
        <div className="card_content">
          <h2>Contact</h2>
          <div className="contacts">
            <div className="contact contact_management">
              <h3>Management & Booking</h3>
              <h4>Stephanie Baustert</h4>
              <p>Tel.: +352 691824515</p>
              <p>
                Mail:{' '}
                <a
                  href="mailto:stephanie@stephaniebaustert.com"
                  className="mail_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  stephanie@stephaniebaustert.com
                </a>
              </p>
            </div>
            <div className="contact contact_gilles">
              <h3>Direct Contact</h3>
              <h4>Gilles Grethen</h4>
              <p>
                Mail:{' '}
                <a
                  href="mailto:gilles@gillesgrethen.com"
                  className="mail_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  gilles@gillesgrethen.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
