import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const SideSocials = () => {
  return (
    <div className="sidesocials">
      <div className="sidesocials_icon_wrapper">
        <a
          href="https://www.instagram.com/gilles_grethen_/"
          target={'_blank'}
          rel="noreferrer"
        >
          <StaticImage
            className="sidesocials_icon"
            src="../../imgs/Insta-logo-whiteblue.png"
            alt="Instagram Logo"
            placeholder="blurred"
          />
        </a>
      </div>
      <div className="sidesocials_icon_wrapper">
        <a
          href="https://www.youtube.com/channel/UCgZez7ebsQQFIO83RDIj8zQ"
          target={'_blank'}
          rel="noreferrer"
        >
          <StaticImage
            className="sidesocials_icon"
            src="../../imgs/yt-logo-whiteblue.png"
            alt="Youtube Logo"
            placeholder="blurred"
          />
        </a>
      </div>
      <div className="sidesocials_icon_wrapper">
        <a
          href="https://www.facebook.com/gillesgrethen"
          target={'_blank'}
          rel="noreferrer"
        >
          <StaticImage
            className="sidesocials_icon"
            src="../../imgs/fb-logo-whiteblue.png"
            alt="Facebook Logo"
            placeholder="blurred"
          />
        </a>
      </div>
    </div>
  );
};

export default SideSocials;
