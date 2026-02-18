
import React from "react";
import "./About.css";
import { FaBullseye, FaEye, FaCheckCircle, FaLeaf, FaIndustry, FaHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <div
        className="about-hero"
        style={{ backgroundImage: 'url("/images/contact.png")' }}
      >
        <div className="about-hero-overlay">
          <h1>About Us</h1>

          <div className="breadcrumb">
            <Link to="/" className="home-link">🏠 Home</Link>
            <span className="arrow"> → </span>
            <span className="current">About Us</span>
          </div>
        </div>
      </div>

      {/* ABOUT CONTENT */}
      <div className="about-container">
        <div className="about-grid">
          
          

          {/* RIGHT CONTENT */}
          <div className="about-text">
            <h3>Welcome to Venkatesh Industries</h3>
            <p className="about-highlight">
              A Legacy of Purity, Progress, and Trust Since 1951
            </p>

            <p>
              Established in <strong>1951</strong>, 
              <strong> M/s Virsangappa Dhulappa Gadave</strong>, operating today as 
              <strong> Shivam Traders & Venkatesh Industries</strong>, carries a rich heritage built over three generations.
              What began as a traditional agricultural trading business has grown into a trusted name in turmeric processing,
              agricultural supply, and global distribution.
            </p>

            <p>
              With over <strong>70+ years of experience</strong>, we have built strong relationships with farmers, traders,
              and customers through reliability, transparency, and ethical business practices.
            </p>

            <p>
              Since <strong>2000</strong>, we expanded into turmeric processing by combining traditional knowledge with modern
              technology to deliver premium-quality products for domestic and international markets.
            </p>

            <p>
              Our manufacturing facility, established in <strong>2016</strong>, spans over
              <strong> 1,00,000 sq. ft.</strong> and includes:
            </p>

            <ul className="about-list">
              <li>In-house processing and sorting systems meeting international standards</li>
              <li>Modern cold storage to preserve turmeric and spice freshness</li>
              <li>Strategic storage ensuring consistent year-round supply</li>
            </ul>

            <p className="about-highlight">
              Rooted in tradition. Driven by quality. Focused on global growth.
            </p>

            {/* FEATURES SECTION */}
            <div className="about-features">

              {/* Premium Portfolio */}
              <div className="feature-item">
                <FaLeaf className="feature-icon" />
                <div>
                  <h4>Our Premium Portfolio</h4>
                  <ul className="about-list">
                    <li>High-quality turmeric with high curcumin content</li>
                    <li>Carefully processed for purity and consistency</li>
                    <li>Flagship product: <strong>Nature Turmeric</strong></li>
                    <li>Meets domestic and international quality standards</li>
                  </ul>
                </div>
              </div>

              {/* Three Generations */}
              <div className="feature-item">
                <FaIndustry className="feature-icon" />
                <div>
                  <h4>Three Generations of Expertise</h4>
                  <ul className="about-list">
                    <li>70+ years of hands-on industry experience</li>
                    <li>Deep knowledge of crop quality and sourcing</li>
                    <li>Modern processing with traditional understanding</li>
                    <li>Consistent quality in every shipment</li>
                  </ul>
                </div>
              </div>

              {/* Values */}
              <div className="feature-item">
                <FaHandshake className="feature-icon" />
                <div>
                  <h4>Our Values</h4>
                  <ul className="about-list">
                    <li>Ethical and transparent business practices</li>
                    <li>Strong long-term partnerships with farmers and customers</li>
                    <li>Focus on quality, consistency, and timely delivery</li>
                    <li>Customer-first approach in every transaction</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* VISION & MISSION SECTION */}
        <div className="vm-section">
          
          {/* VISION */}
          <div className="vm-card">
            <FaEye className="vm-icon" />
            <h2>Our Vision</h2>
            <div className="vm-line"></div>

            <p>
              To become a leading and trusted name in the agricultural and turmeric industry by consistently
              delivering quality, reliability, and value.
            </p>

            <p>
              To strengthen our role as a dependable link between farmers, traders, and customers across
              domestic and global markets.
            </p>
          </div>

          {/* MISSION */}
          <div className="vm-card">
            <FaBullseye className="vm-icon" />
            <h2>Our Mission</h2>
            <div className="vm-line"></div>

            <p>
              To provide high-quality agricultural and turmeric products through ethical business practices,
              modern processing, and transparent operations.
            </p>

            <p>
              To continuously improve our capabilities while meeting customer needs with consistency, trust,
              and timely delivery.
            </p>
          </div>
        </div>

        {/* WHY CHOOSE US SECTION */}
        <div className="why-choose-section">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Trusted experience, uncompromised quality, and customer-first values
          </p>

          <div className="why-choose-grid">
            <div className="why-card">
              <FaCheckCircle className="why-icon" />
              <h3>70+ Years of Legacy</h3>
              <p>
                Decades of experience across three generations ensure deep industry knowledge and reliable business practices.
              </p>
            </div>

            <div className="why-card">
              <FaCheckCircle className="why-icon" />
              <h3>Premium Quality Products</h3>
              <p>
                From sourcing to processing, every step is focused on delivering pure, high-quality turmeric and agricultural products.
              </p>
            </div>

            <div className="why-card">
              <FaCheckCircle className="why-icon" />
              <h3>Modern Infrastructure</h3>
              <p>
                Advanced processing, storage, and supply chain facilities ensure efficiency, hygiene, and consistency.
              </p>
            </div>

            <div className="why-card">
              <FaCheckCircle className="why-icon" />
              <h3>Trust & Transparency</h3>
              <p>
                Ethical business practices and transparent dealings have helped us build long-term relationships with farmers and customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

