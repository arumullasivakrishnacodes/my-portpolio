import React, { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';

function Footer () {
  const [topButton, SetTopButton] = useState(false);

  const handlePageScroll = () => {
    SetTopButton(window.scrollY > 50);
  }

  useEffect(() => {
    window.addEventListener('scroll', handlePageScroll);
    return () => {
      window.addEventListener('scroll', handlePageScroll);
    };
  },[]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

    return (
      <div className="footer-section">
        <div className="container">
          <div className="menu-item-container">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/websites">Websites</NavLink>
          </div>
          <div className="social-icons-container-footer">
            <i class="bi bi-youtube"></i>
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-github"></i>
          </div>
          <div className="copyright-section">© 2024 Learn with Arumulla SivaKrishna, Inc. All Rights Reserved.</div>
        </div>
        <div className={`footer-scrolltotop ${topButton ? `` : `d-none`}`} onClick={handleScrollToTop}><i class="bi bi-arrow-up"></i></div>
      </div>
    );
}

export default Footer;