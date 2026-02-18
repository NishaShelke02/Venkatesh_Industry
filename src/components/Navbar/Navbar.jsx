import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaGlobeAmericas } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const productRef = useRef(null);

  const location = useLocation();
  const isHome = location.pathname === "/";

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (productRef.current && !productRef.current.contains(e.target)) {
        setProductOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setProductOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* ---------------- TOP BAR ---------------- */}
      <div className="top-bar">
        <div className="logo-section">
          <img src="/images/logo.png" alt="Venkatesh Industries" className="logo-img" />
        </div>

        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoMdClose size={28} /> : <GiHamburgerMenu size={28} />}
        </div>

        <div className="top-items-desktop">
          <a href="tel:+919921056555" className="top-item">
            <FiPhoneCall className="top-icon" />
            <div className="top-text">
              <b>+91 99210 56555</b>
              <p>Make a Call</p>
            </div>
          </a>

          <div className="divider" />

          <a href="mailto:shivamtraders.5682@gmail.com" className="top-item">
            <HiOutlineMail className="top-icon" />
            <div className="top-text">
              <b>info@venkateshindustries.com</b>
              <p>Email Us</p>
            </div>
          </a>

          <div className="divider" />

          <a
            href="https://www.google.com/maps/search/?api=1&query=Miraj+Industrial+Area+Sangli"
            target="_blank"
            rel="noreferrer"
            className="top-item"
          >
            <FaGlobeAmericas className="top-icon" />
            <div className="top-text">
              <b>Miraj MIDC,Sangli</b>
              <p>Location</p>
            </div>
          </a>
        </div>
      </div>

      {/* ---------------- MAIN NAVBAR ---------------- */}
      <nav
        className={`navbar ${
          isHome ? "navbar-transparent" : "navbar-solid"
        } ${menuOpen ? "open" : ""}`}
      >
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT US</Link></li>

          {/* PRODUCTS */}
          <li className={`dropdown ${productOpen ? "active" : ""}`} ref={productRef}>
            <span
              className="dropdown-title"
              onClick={() => setProductOpen(!productOpen)}
            >
              OUR PRODUCTS ▾
            </span>

            <ul className="dropdown-menu">
              <li><Link to="/products/whole-turmeric">Whole Turmeric</Link></li>
              <li><Link to="/products/broken-turmeric">Broken Turmeric</Link></li>
              <li><Link to="/products/bulb-turmeric">Bulb Turmeric</Link></li>
              <li><Link to="/products/turmeric-powder">Turmeric Powder</Link></li>
              <li><Link to="/products/curma-turmeric-powder">Curma Turmeric Powder</Link></li>
              <li><Link to="/products/nature-turmeric-powder">Nature Turmeric Powder</Link></li>
              <li><Link to="/products/global-turmeric-powder">Global Turmeric Powder</Link></li>
              <li><Link to="/products/salem-turmeric-powder">Salem Turmeric Powder</Link></li>
              <li><Link to="/products/double-lotus-turmeric-powder">Double Lotus Turmeric Powder</Link></li>
              <li><Link to="/products/indian-raisins">Raisins (Kismis)</Link></li>
            </ul>
          </li>

          <li><Link to="/services">SERVICES</Link></li>
          <li><Link to="/brands">BRANDS</Link></li>
          <li><Link to="/infrastructure">INFRASTRUCTURE</Link></li>
          <li><Link to="/policies">POLICIES</Link></li>
          <li><Link to="/blogs">BLOGS</Link></li>
          <li><Link to="/contact">CONTACT US</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
