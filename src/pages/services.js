import React from 'react';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

const Services = () => {
  return (
    <div className="cards">
      <GatsbySeo
        title="Gilles Grethen | Services"
        description={`Gilles Grethen's services including engraving, arranging and composing.`}
        language="en"
        noindex={false}
        nofollow={false}
      />
      <div className="card services">
        <div className="services_article">
          <h1 className="services_title">Engraving</h1>
          <p className="services_description">
            I can beautifully engrave your handwritten or pdf sheet music into
            ready to play and publish scores and parts! Hit me up with your
            project, so I can give you your custom offer!
          </p>
        </div>
        <hr className="services_line" />
        <div className="services_article">
          <h1 className="services_title">Arranging</h1>
          <p className="services_description">
            I can arrange all kinds of different music for any ensemble. I have
            a lot of experience writing for Big Band, Orchestra, smaller jazz
            combos (e.g. Jazz Messengers style). Hit me up to get see prices!
          </p>
        </div>
        <hr className="services_line" />
        <div className="services_article">
          <h1 className="services_title">Composing</h1>
          <p className="services_description">
            I can compose a song for any kind of ensemble and style! Hit me up
            if you are interested in me writing something for your ensemble!
          </p>
        </div>
        <hr className="services_line" />
        <div className="services_article">
          <h1 className="services_title">Fiverr</h1>
          <p className="services_description">
            You can also find all my services on fiverr if you prefer to book me
            there!
            <a
              className="services_fiverr_url"
              href="https://www.fiverr.com/gillesgrethen"
              target={'_blank'}
              rel="noreferrer"
            >
              {` https://www.fiverr.com/gillesgrethen`}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
