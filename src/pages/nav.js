import React from 'react';
import { Link } from 'gatsby';
import { useState } from 'react';

const Navbar = (props) => {
  const links = [
    { name: 'News', key: 'news', url: '/news' },
    { name: 'Quartet', key: 'quartet', url: '/quartet' },
    { name: 'Media', key: 'media', url: '/media' },
    { name: 'Concerts', key: 'concerts', url: '/concerts' },
    { name: 'Services', key: 'services', url: '/services' },
    { name: 'Contact', key: 'contact', url: '/contact' },
    { name: 'Shop', key: 'shop', url: '/shop' },
  ];

  const [navactive, setNavActive] = useState(0);

  const activate = (e) => {
    setNavActive(1);
    document
      .querySelectorAll('.navbar_link')
      .forEach((link) => link.firstChild.classList.remove('activeLink'));
    e.target.closest('.navbar_link').firstChild.classList.add('activeLink');
  };

  return (
    <div className="navbar" navactive={navactive}>
      {links.map((link) => {
        return (
          <div key={link.key} className="navbar_link">
            <Link
              to={link.url}
              onClick={(e) => {
                activate(e);
              }}
              className="link"
            >
              {link.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
