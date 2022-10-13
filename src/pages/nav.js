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
      .forEach((link) => link.classList.remove('activeLink'));
    e.target.closest('.navbar_link').classList.add('activeLink');
  };

  // const socialsBtnHandler = () => {
  //   const socialsCont = document.querySelector(
  //     '.navbar_link_socials_container'
  //   );

  //   if (socialsCont.style.display === 'flex') {
  //     socialsCont.style.display = 'none';
  //     return;
  //   }

  //   socialsCont.style.display = 'flex';
  //   socialsCont.style.display = 'none';
  // };

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
      {/* <div className="navbar_link">
        <button
          className="navbar_link_socials link"
          onClick={socialsBtnHandler}
        >
          Socials
        </button>
      </div>
      <div className="navbar_link_socials_container">
        <div>Youtube</div>
        <div>Insta</div>
        <div>Face</div>
      </div> */}
    </div>
  );
};

export default Navbar;
