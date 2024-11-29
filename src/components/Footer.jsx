import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerSection">
        <p>Copyright © 2024 SensoryScape.<br />All rights reserved</p>
        <div className="socialIcons">
          <a href="#" className="icon"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" className="icon"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#" className="icon"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
      </div>

      <div className="footerSection">
        <h4 className="heading">Company</h4>
        <ul className="linkList">
          <li><a href="#" className="link">About us</a></li>
          <li><a href="#" className="link">Blog</a></li>
          <li><a href="#" className="link">Contact us</a></li>
          <li><a href="#" className="link">Pricing</a></li>
          <li><a href="#" className="link">Testimonials</a></li>
        </ul>
      </div>

      <div className="footerSection">
        <h4 className="heading">Support</h4>
        <ul className="linkList">
          <li><a href="#" className="link">Help center</a></li>
          <li><a href="#" className="link">Terms of service</a></li>
          <li><a href="#" className="link">Legal</a></li>
          <li><a href="#" className="link">Privacy policy</a></li>
          <li><a href="#" className="link">Status</a></li>
        </ul>
      </div>

      <div className="footerSection">
        <h4 className="heading">Stay up to date</h4>
        <form className="subscribeForm">
          <input type="email" placeholder="Your email address" className="input" required />
          <button type="submit" className="button"><FontAwesomeIcon icon={faPaperPlane} /></button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
