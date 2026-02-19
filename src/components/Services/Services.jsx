import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      {/* ===== Banner Section ===== */}
      <section className="services-section">
        {/* Background Image */}
        <img
          src="/images/services.png"
          alt="Services"
          className="services-bg"
        />

        {/* Bottom Content */}
        <div className="services-overlay">
          <div className="services-container">
            <div className="services-content">
              <h1>SERVICES</h1>
              <p>
                Being one of the largest spices & food processing, packaging and
                labelling houses in India, we take pride in providing high-quality
                end-to-end solutions from sourcing to customized packaging with
                world-class quality.
              </p>
            </div>

            <div className="services-enquire">
              <Link to="/contact" className="enquire-btn">
                ENQUIRE NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Turmeric Details Section ===== */}
      <section className="service-detail-section">
        <div className="detail-container">
          <h2>Turmeric Processing Services</h2>

          <p>
            At Venkatesh Industries, we provide advanced turmeric processing
            solutions to maintain the natural color, aroma, and curcumin content.
            Our modern infrastructure and strict quality control ensure premium
            products for both domestic and international markets.
          </p>

          {/* ===== New Image Grid Section ===== */}
          <div className="turmeric-gallery">
            <img src="/images/infra3.png" alt="Turmeric Cleaning" />
            <img src="/images/infra2.png" alt="Turmeric Polishing" />
            <img src="/images/grind.png" alt="Turmeric Grinding" />
            <img src="/images/Home4.png" alt="Quality Testing" />
            <img src="/images/turmeric-5.jpg" alt="Packaging" />
            <img src="/images/infra1.png" alt="Storage" />
          </div>
          {/* ===================================== */}

          <ul className="service-list">
            <li>
              <strong>Premium Raw Material Sourcing:</strong> High-quality turmeric
              procured directly from trusted farmers.
            </li>
            <li>
              <strong>Cleaning & Sorting:</strong> Removal of dust, stones, and
              impurities using advanced cleaning systems.
            </li>
            <li>
              <strong>Polishing:</strong> Outer layer removal for a clean and
              polished appearance.
            </li>
            <li>
              <strong>Grinding & Milling:</strong> Advanced grinding including
              Cryogenic Grinding to preserve natural oils and aroma.
            </li>
            <li>
              <strong>Quality Testing:</strong> Strict checks for moisture,
              purity, color, and curcumin content.
            </li>
            <li>
              <strong>Modern Cold Storage:</strong> Temperature-controlled storage
              to maintain freshness and prevent contamination.
            </li>
            <li>
              <strong>Customized Production:</strong> Different grades and mesh
              sizes as per client requirements.
            </li>
            <li>
              <strong>Flexible Packaging:</strong> Available in 200g, 500g, 1kg
              and bulk quantities with private labeling options.
            </li>
          </ul>
        </div>
      </section>

      {/* ================= RESINIS SERVICE ================= */}
      <div className="service-card">
        <img
          src="/images/Product/Raisin.png"
          alt="Raisins packaging and processing service"
        />
        <h3>RESINIS</h3>
        <p className="service-desc">
          Our Raisins division provides complete post-harvest handling and
          packaging solutions designed to maintain product quality, safety, and
          market readiness. We ensure every product is processed in a clean,
          controlled, and efficient environment that meets international
          standards.
        </p>

        <ul className="service-list">
          <li>
            <strong>Industrial Netting:</strong> Secure and breathable netting
            solutions that protect products while allowing proper air
            circulation to preserve freshness and quality.
          </li>

          <li>
            <strong>Professional Washing & Drying:</strong> Advanced cleaning
            and drying processes using food-safe and material-safe methods to
            remove impurities and maintain hygiene.
          </li>

          <li>
            <strong>Precision Tray Packing:</strong> Systematic and organized
            tray arrangements that ensure efficient handling, better
            presentation, and safe transportation.
          </li>

          <li>
            <strong>Customized Box Packaging:</strong> Packaging solutions
            designed as per product size, quantity, and branding requirements
            for both domestic and export markets.
          </li>

          <li>
            <strong>Hygienic Maintenance:</strong> Processing and storage in a
            climate-controlled, sanitized facility that follows strict quality
            and safety standards.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Services;