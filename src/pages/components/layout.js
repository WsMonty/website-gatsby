import React from 'react';
import Navbar from '../nav.js';
import '../../scss/main.scss';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

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
    </div>
  );
};

export default Layout;
