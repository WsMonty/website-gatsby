import Slider from './slider';
import React from 'react';

const Quartet = (props) => {
  return (
    <div className="cards">
      <div className="card card_quartet">
        <div className="card_content">
          <h2>Gilles Grethen Quartet</h2>
          <p>
            Luxembourg guitarist Gilles Grethen’s quartet convinces with a rich
            sound diversity and compositions oscillating between traditional and
            modern jazz. Warm harmonies and lyrical melodies, combined with a
            captivating rhythm and underlined by Grethen’s warm yet vibrant
            guitar sound, are the ingredients of their music. Both motives
            developed in unison and bold improvisations reveal the complicity of
            the four musicians. The Gilles Grethen Quartet released its debut
            album “Time Suite” on 28 May 2021 on Double Moon Records.
          </p>
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Quartet;
