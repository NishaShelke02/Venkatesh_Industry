import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      {/* Background Image */}
      <img
        src="/images/Contact1.png"
        alt="Contact Background"
        className="contact-bg"
      />

      {/* Overlay Content */}
      <div className="contact-overlay">
        {/* Left Content */}
        <div className="contact-left">
          <h1 className="contact-title">CONTACT</h1>
         <p className="contact-text">
  At Venkatesh Industries, we specialize in supplying premium-grade turmeric
  with assured quality and consistency. Whether you require raw material,
  customized processing, private label packaging, or reliable worldwide
  delivery, we are committed to supporting your business at every step.
  <br /><br />
  Get in touch with us through any of the contact options below, and our team
  will get back to you quickly.
</p>
        </div>

        {/* Right Button */}
        <div className="contact-right">
          <button className="enquire-btn">ENQUIRE NOW</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;