import Slider from './components/slider';
import React from 'react';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import Quotes from './components/quotes';

const Quartet = (props) => {
  return (
    <div className="cards">
      <GatsbySeo
        title="Gilles Grethen | Quartet"
        description={`Gilles Grethen Quartet Page`}
        language="en"
        noindex={false}
        nofollow={false}
      />
      <div className="card card_quartet">
        <div className="card_content">
          <h2>Gilles Grethen Quartet</h2>
          <p className="card_quartet_text">
            Luxembourg guitarist Gilles Grethen’s quartet convinces with a rich
            sound diversity and compositions oscillating between traditional and
            modern jazz. Warm harmonies and lyrical melodies, combined with a
            captivating rhythm and underlined by Grethen’s warm yet vibrant
            guitar sound, are the ingredients of their music. Both motives
            developed in unison and bold improvisations reveal the complicity of
            the four musicians. The Gilles Grethen Quartet released its debut
            album 'Time Suite' on 28 May 2021 on Double Moon Records. <br />
            <br /> A second album is coming on 21st October! The title of the
            new album is 'State of Mind' and it features the Gilles Grethen
            Quartet along with 11 amazing string players!
          </p>
          <Quotes />
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Quartet;
