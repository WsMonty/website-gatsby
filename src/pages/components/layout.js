import React from 'react';
import Navbar from '../nav.js';
import '../../scss/main.scss';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import CookieConsent from 'react-cookie-consent';
import SideSocials from './sideSocials.js';

const Layout = ({ children }) => {
  return (
    <div className="main">
      <GatsbySeo
        title="Gilles Grethen"
        description={`Gilles Grethen's Website about his music and projects.`}
        language="en"
        noindex={false}
        nofollow={false}
      />
      <Navbar />
      {children}
      <SideSocials />
      <CookieConsent
        cookieName="Google Fonts"
        buttonStyle={{ backgroundColor: '#da8525', fontSize: '13px' }}
        style={{ background: '#1E1E1E' }}
      >
        This website uses cookies to improve user experience!
      </CookieConsent>
    </div>
  );
};

export default Layout;
