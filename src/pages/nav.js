import React from 'react';
import { Link } from 'gatsby';
import { useState } from 'react';

const Navbar = (props) => {
  const links = [
    { name: 'News', key: 'news', url: '/news' },
    { name: 'Quartet', key: 'quartet', url: '/quartet' },
    { name: 'Media', key: 'media', url: '/media' },
    { name: 'Concerts', key: 'concerts', url: '/concerts' },
    { name: 'Contact', key: 'contact', url: '/contact' },
    { name: 'Shop', key: 'shop', url: '/shop' },
  ];

  const [navactive, setNavActive] = useState(0);

  const activate = (e) => {
    setNavActive(1);
    document
      .querySelectorAll('.link')
      .forEach((link) => link.classList.remove('activeLink'));
    e.target.classList.add('activeLink');
  };

  return (
    <div className="main">
      <div className="navbar" navactive={navactive}>
        <ul className="navbar_links">
          {links.map((link) => {
            return (
              <li key={link.key} className="navbar_link">
                <Link
                  to={link.url}
                  onClick={(e) => {
                    activate(e);
                  }}
                  className="link"
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
