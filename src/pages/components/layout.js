import React from 'react';
import Navbar from '../nav.js';
import '../../scss/main.scss';
import { Helmet } from 'react-helmet';

const Layout = ({ children }) => {
  return (
    <div className="main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gilles Grethen</title>
      </Helmet>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
