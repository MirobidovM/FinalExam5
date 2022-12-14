import React from 'react';
import logoFooter from '../../assets/img/logo-footer.svg';
import { NavLink } from 'react-router-dom';
import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper container d-flex justify-content-between">
        <a href="/">
          <img
            className="footer-logo"
            src={logoFooter}
            alt="footer-logo"
            width={182}
            height={70}
          />
        </a>

        <ul className="d-flex">
          <li className="footer-row1">
            <h6 className="footer-title">FIGHT WITH ME ON:</h6>
            <div className="d-flex flex-column">
              <NavLink className="footer-link" to={'/'}>
                Twitter
              </NavLink>
              <NavLink className="footer-link" to={'/'}>
                Instagram
              </NavLink>
              <NavLink className="footer-link" to={'/'}>
                Telegram
              </NavLink>
              <NavLink className="footer-link" to={'/'}>
                YouTube
              </NavLink>
              <NavLink className="footer-link" to={'/'}>
                Figma
              </NavLink>
            </div>
          </li>

          <li className="footer-row2">
            <h6 className="footer-title">WHAT I HAVE DONE:</h6>
            <div className="d-flex flex-column">
              <NavLink className="footer-link" to={'/'}>
                Xalq Kutubxonasi
              </NavLink>
              <NavLink className="footer-link" to={'/'}>
                Websitee
              </NavLink>
              <NavLink className="footer-link" to={'/'}>
                Website
              </NavLink>
              <NavLink className="footer-link" to={'/'}>
                Play Market
              </NavLink>
              <NavLink className="footer-link" to={'/'}>
                App Store
              </NavLink>
            </div>
          </li>

          <li className="footer-row3">
            <div className="d-flex flex-column">
              <NavLink className="footer-link" to={'/'}>
                Contact
              </NavLink>
              <NavLink className="footer-link" to={'/'}>
                Blog
              </NavLink>
              <NavLink className="footer-link" to={'/'}>
                Dribbble
              </NavLink>
              <NavLink className="footer-link" to={'/'}>
                Behance
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};
