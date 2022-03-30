import React from 'react';
import Navbar from '../nav.js';
import '../../scss/main.scss';

const Layout = ({ children }) => {
  return (
    <div className="main">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
