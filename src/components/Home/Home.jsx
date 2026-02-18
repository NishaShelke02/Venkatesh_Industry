import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaIndustry, FaBalanceScale, FaUsers, FaBuilding } from "react-icons/fa";
import "./Home.css";

/* ================= HERO SLIDES ================= */
const slides = [
  {
    id: 1,
    title: "From farm to firm",
    
    image: "/images/Home.png",
  },
  {
    id: 2,
    title: "Pure Natural",
    
    image: "/images/Home1.png",
  },
  {
    id: 3,
    title: "We Are Serve The Best Service",
    
    image: "/images/Home3.png",
  },
  {
    id: 4,
    title: "Maintaining Quality Of Product 100% Organic",
    
    image: "/images/Home4.png",
  },
];

/* ================= FACTS DATA ================= */
const facts = [
  {
    id: 1,
    value: "1952",
    title: "Year of Establishment",
    icon: <FaBuilding />,
  },
  {
    id: 2,
    value: "Partnership",
    title: "Legal Status of Firm",
    icon: <FaBalanceScale />,
  },
  {
    id: 3,
    value: "Upto 25 People",
    title: "Total Number of Employees",
    icon: <FaUsers />,
  },
  {
    id: 4,
    value: "Manufacturer",
    title: "Nature of Business",
    icon: <FaIndustry />,
  },
];
/* ================= PRODUCTS DATA ================= */
const products = [
  {
    id: 1,
    name: "Whole Turmeric",
    image: "/images/Product/whole.png",
  },
  {
    id: 2,
    name: " Broken Turmeric",
    image: "/images/Product/Broken1.png",
  },
  {
    id: 3,
    name: "Bulb Turmeric",
    image: "/images/Product/Bulb1.png",
  },
  {
    id: 4,
    name: "Turmeric Powder",
    image: "/images/Product/Powder.png",
  },
  {
    id: 5,
    name: "Raisins (Kismis Indian)",
    image: "/images/Product/raisins.png",
  },
];

const Home = () => {
  /* ================= HERO SLIDER ================= */
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  /* ================= SCROLL ANIMATION ================= */
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ================= FACTS AUTO HIGHLIGHT ================= */
  const [factIndex, setFactIndex] = useState(0);

  useEffect(() => {
    const factTimer = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % facts.length);
    }, 3000);
    return () => clearInterval(factTimer);
  }, []);

  return (
    <>
      {/* ================= HERO SLIDER ================= */}
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay">
              <h3>{slide.title}</h3>
              <h1>{slide.subtitle}</h1>
              
            </div>
          </div>
        ))}

        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${current === index ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>

      {/* ================= WELCOME SECTION ================= */}
<section
  className={`welcome-section ${show ? "show" : ""}`}
  ref={sectionRef}
>
  <div className="welcome-container">
    
    {/* Left Image */}
    <div className="welcome-image">
      <img src="/images/welcome.png" alt="Venkatesh Industries" />
    </div>

    {/* Right Content */}
    <div className="welcome-content">
      <h4>Welcome to Venkatesh Industries</h4>
      <h2>A Legacy of Purity, Progress & Trust Since 1951</h2>

      <p>
        Established in 1951, Venkatesh Industries carries a rich heritage of three
        generations in agricultural processing and exports. From a local foundation
        to a global presence, we combine traditional knowledge with modern technology
        to deliver premium quality products to the world.
      </p>

      <h5>Our Infrastructure</h5>
      <ul>
        <li>Advanced in-house processing and sorting for export-quality Turmeric</li>
        <li>Modern cold storage for Turmeric, Spices, and resins</li>
        <li>Strategic storage ensuring year-round global supply</li>
      </ul>

      <h5>Our Premium Products</h5>
      <p>
        Our flagship offering, <strong>Nature Turmeric</strong>, is a high-curcumin
        premium product processed under strict international quality standards for
        global markets.
      </p>

      <h5>Our Strength</h5>
      <p>
        With over 75 years of experience, our third-generation leadership understands
        the crop, processing science, and global trade, ensuring quality, value,
        and integrity in every shipment.
      </p>

      <h5>Our Values</h5>
      <p>
        Built on trust and genuine relationships, we believe in creating win-win
        partnerships for farmers, our team, and our global customers.
      </p>

      <button className="welcome-btn">Read More</button>
    </div>
  </div>
</section>

      {/* ================= FACTSHEET SECTION ================= */}
      <section className="facts-section">
        <div className="facts-header">
          <h2>Our Factsheet</h2>
          <p>
            We provide you a better service. You won't have complaint about our
            service, it's guaranteed.
          </p>
        </div>

        <div className="facts-container">
          {facts.map((fact, index) => (
            <div
              key={fact.id}
              className={`fact-card ${index === factIndex ? "active" : ""}`}
            >
              <div className="fact-icon">{fact.icon}</div>
              <h3>{fact.value}</h3>
              <p>{fact.title}</p>
            </div>
          ))}
        </div>
      </section>
      {/* ================= OUR PRODUCTS ================= */}
{/* ================= OUR PRODUCTS ================= */}
<section className="products-section">
  <div className="products-header">
    <h2>Our Products</h2>
    <p>
      We provide you a better service. You have no complaint about our
      service, it's guaranteed.
    </p>
  </div>

  <div className="products-container">
    {products.map((product) => (
      <div className="product-card" key={product.id}>
        
        <div className="product-img">
          <img src={product.image} alt={product.name} />

          {/* Overlay Arrow */}
          <div className="product-overlay">
            <span>↗</span>
          </div>
        </div>

        <div className="product-info">
          <h3>{product.name}</h3>
          <Link to="/products" className="read-more">
            Read More ↗
          </Link>
        </div>
      </div>
    ))}
  </div>
</section>
    </>
  );
};

export default Home;