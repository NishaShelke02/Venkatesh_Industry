import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaTag,
  FaPaperPlane,
  FaCommentAlt,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const Contact = () => {

  const products = [
    { name: "Whole Turmeric" },
    { name: "Broken Turmeric" },
    { name: "Bulb Turmeric" },
    { name: "Turmeric Powder" },
    { name: "Curma Turmeric Powder" },
    { name: "Nature Turmeric Powder" },
    { name: "Global Turmeric Powder" },
    { name: "Salem Turmeric Powder" },
    { name: "Double Lotus Turmeric Powder" },
    { name: "Raisins (Dry Grapes)" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    product: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ CONNECTED TO NODE BACKEND
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("⏳ Sending...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("✅ Message sent successfully!");

        setFormData({
          name: "",
          phone: "",
          address: "",
          email: "",
          product: "",
          message: "",
        });
      } else {
        setStatus("❌ Failed to send message.");
      }

    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Server error.");
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="contact-page">

      {/* HERO */}
      <div className="contact-hero" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/Contact2.png)` }}>
        <div className="hero-overlay">
          <h1>Contact Us</h1>
          <p>
            <Link to="/">Home</Link> → Contact
          </p>
        </div>
      </div>

      {/* CONTACT INFO */}
      <div className="contact-info">

        <div className="info-box">
          <FaPhoneAlt />
          <h4>Phone</h4>
          <p>+91 99210 56555</p>
          <p>+91 91461 88292</p>
        </div>

        <div className="info-box">
          <FaEnvelope />
          <h4>Email</h4>
          <p>info@venkateshindustries.in</p>
          <p>sales@venkateshindustries.in</p>
        </div>

        <div className="info-box">
          <FaMapMarkerAlt />
          <h4>Office Address</h4>
          <p>Plot No 40, 1st Line</p>
          <p>Vasantdada Market Yard</p>
          <p>Sangli – 416416</p>
        </div>

        <div className="info-box">
          <FaClock />
          <h4>Working Hours</h4>
          <p>Mon – Sat</p>
          <p>9:00 AM – 7:00 PM</p>
        </div>

      </div>

      {/* FORM */}
      <div className="contact-form-section">
        <div className="contact-container">
          {/* GOOGLE MAP */}
          <div className="map-section">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30547.7246121036!2d74.6125317!3d16.8528482!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1231cf95ba14b%3A0x983dc52686ad1325!2sVENKATESH%20INDUSTRIES!5e0!3m2!1sen!2sin!4v1773431377493!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Venkatesh Industries Location"
            ></iframe>
          </div>

          {/* FORM */}
          <div className="form-section">
            <div className="form-card">
              <h2>Send Us a Message</h2>

              <form onSubmit={handleSubmit}>

                <div className="input-group">
                  <FaUser />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group">
                  <FaPhoneAlt />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group">
                  <FaMapMarkerAlt />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group">
                  <FaEnvelope />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group">
                  <FaTag />
                  <select
                    name="product"
                    required
                    value={formData.product}
                    onChange={handleChange}
                  >
                    <option value="">Select Product</option>
                    {products.map((item, index) => (
                      <option key={index} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="input-group textarea-group">
                  <FaCommentAlt />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit">
                  <FaPaperPlane /> Send Message
                </button>

                {status && <p className="status-message">{status}</p>}

              </form>

              <div className="social-icons">
                <a href="https://wa.me/919921056555" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;