import React from "react";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaGlobeAmericas, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
return ( <footer className="footer"> <div className="footer-container">

```
    {/* ----- Logo & About ----- */}
    <div className="footer-section footer-about">
      <img
        src="/images/logo.png"
        alt="Venkatesh Industries Logo"
        className="footer-logo"
      />
      <p>
        Venkatesh Industries is a trusted name in premium turmeric and related
        products, providing quality and excellence for over a decade.
      </p>

      {/* Social Media Links - give real URLs or fallback */}
      <div className="footer-socials">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>

    {/* ----- Quick Links ----- */}
    <div className="footer-section footer-links">
      <h4>Quick Links</h4>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/brands">Brands</Link></li>
        <li><Link to="/infrastructure">Infrastructure</Link></li>
        <li><Link to="/policies">Policies</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>

    {/* ----- Products ----- */}
    <div className="footer-section footer-products">
      <h4>Our Products</h4>
      <ul>
        <li><Link to="/products/whole-turmeric">Whole Turmeric</Link></li>
        <li><Link to="/products/broken-turmeric">Broken Turmeric</Link></li>
        <li><Link to="/products/turmeric-powder">Turmeric Powder</Link></li>
        <li><Link to="/products/indian-raisins">Raisins (Kismis)</Link></li>
      </ul>
    </div>

    {/* ----- Contact Info ----- */}
    <div className="footer-section footer-contact">
      <h4>Contact Us</h4>
      <div className="footer-contact-item">
        <FiPhoneCall className="footer-icon" />
        <span>+91 99210 56555</span>
      </div>
      <div className="footer-contact-item">
        <HiOutlineMail className="footer-icon" />
        <span>shivamtraders.5682@gmail.com</span>
      </div>
      <div className="footer-contact-item">
        <FaGlobeAmericas className="footer-icon" />
        <span>Miraj Industrial Area, Sangli</span>
      </div>
    </div>

  </div>

  <div className="footer-bottom">
    <p>
      © {new Date().getFullYear()} Venkatesh Industries. All rights reserved | Powered by Nivvish Infotech
    </p>
  </div>
</footer>


);
};

export default Footer;
