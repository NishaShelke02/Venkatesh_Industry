import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Whatsapp.css";

const WhatsAppButton = () => {
  const phoneNumber = "919921056555"; // Replace with your number (with country code)
  const message = "Hello, I am interested in your products.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;