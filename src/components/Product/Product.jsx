import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Product.css";

const Product = () => {
  const { slug } = useParams();

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.find((item) => item.slug === slug);
        setProduct(foundProduct);

        if (foundProduct?.gallery?.length) {
          setMainImage(foundProduct.gallery[0]);
        } else if (foundProduct?.image) {
          setMainImage(foundProduct.image);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading products:", err);
        setLoading(false);
      });
  }, [slug]);

  // ===== Loading State =====
  if (loading) {
    return (
      <div className="product-loading">
        <h2>Loading product...</h2>
      </div>
    );
  }

  // ===== Not Found =====
  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <Link to="/" className="back-btn">
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="product-container">
      <div className="product-wrapper">

        {/* ===== Gallery Section ===== */}
        <div className="product-image-section">
          <div className="main-image-wrapper">
            <img
              key={mainImage}
              src={mainImage}
              alt={product.name}
              className="main-image"
              loading="lazy"
            />
          </div>

          {product.gallery && (
            <div className="thumbnail-container">
              {product.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className={`thumbnail ${
                    mainImage === img ? "active" : ""
                  }`}
                  onClick={() => setMainImage(img)}
                  loading="lazy"
                />
              ))}
            </div>
          )}
        </div>

        {/* ===== Product Details ===== */}
        <div className="product-details">

          {/* Category First (Professional Layout) */}
          <p className="product-category">{product.category}</p>

          <h1>{product.name}</h1>

          <p className="product-description">
            {product.description}
          </p>

          {/* Dynamic Features */}
          <ul className="product-features">
            {product.features?.length ? (
              product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))
            ) : (
              <>
                <li>Premium Quality</li>
                <li>Hygienically Processed</li>
                <li>Bulk & Export Available</li>
                <li>Competitive Pricing</li>
              </>
            )}
          </ul>

          {/* Buttons */}
          <div className="product-buttons">
            <Link to="/contact" className="enquiry-btn">
              Send Enquiry
            </Link>

            <a
              href={`https://wa.me/919921056555?text=I'm interested in ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>

      {/* ===== Contact Info Section ===== */}
      <div className="product-contact">
        <h2>Contact Details</h2>

        <div className="contact-items">

          {/* Phone */}
          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div className="contact-content">
              <h3>Phone</h3>
              <a href="tel:+919921056555">+91 99210 56555</a><br />
              <a href="tel:+919146188292">+91 91461 88292</a>
            </div>
          </div>

          {/* Email */}
          <div className="contact-item">
            <div className="contact-icon">✉</div>
            <div className="contact-content">
              <h3>Email</h3>
              <a href="mailto:info@venkateshindustries.in">
                info@venkateshindustries.in
              </a><br />
              <a href="mailto:sales@venkateshindustries.in">
                sales@venkateshindustries.in
              </a>
            </div>
          </div>

          {/* Office Address */}
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div className="contact-content">
              <h3>Office Address</h3>
              <p>
                Plot No 40, 1st Line, Vasantdada Market Yard,<br />
                Sangli – 416416
              </p>
            </div>
          </div>

          {/* Factory Address */}
          <div className="contact-item">
            <div className="contact-icon">🏭</div>
            <div className="contact-content">
              <h3>Factory Address</h3>
              <p>
                Plot No B-8/6/7, Miraj Industrial Area,<br />
                Tal–Miraj, Dist–Sangli – 416436
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Product;