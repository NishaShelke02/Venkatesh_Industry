import React from "react";
import "./Policies.css";
import { Link } from "react-router-dom";

const Policies = () => {
  return (
    <>
      {/* ================= QUALITY POLICY HERO ================= */}
      <section
        className="policy-hero"
        style={{ backgroundImage: "url('/images/policies.png')" }}
      >
        <div className="policy-overlay">
          <div className="policy-content">
            <div className="policy-text">
              <h1>QUALITY POLICY</h1>
              <p>
                To retain the quality of our products, we have established a
                robust procurement process and strict quality control system.
                Every batch is processed and tested according to international
                standards in our advanced laboratory.
              </p>
            </div>

            <div className="policy-btn">
  <Link to="/contact">
    <button>ENQUIRE NOW</button>
  </Link>
</div>

          </div>
        </div>
      </section>

      {/* ================= ANALYTICAL LAB SECTION ================= */}
      <section className="lab-section">
        <div className="lab-container">
          
          {/* LEFT CONTENT */}
          <div className="lab-text">
            <h2>
              OUR ANALYTICAL LABORATORY <br />
              ENSURES WE DELIVER <br />
              THE BEST QUALITY
            </h2>

            <div className="lab-underline">
              <span className="red"></span>
              <span className="yellow"></span>
            </div>

            <p>
              We do not compromise on the quality of our products, for it is the
              quality that wins the hearts of our customers and earns their
              trust. From harvesting of crops to processing and manufacturing,
              we ensure that international quality standards are met at every
              stage.
            </p>

            <p>
              Our Quality Control and Quality Assurance laboratories are
              Agmark-certified, where products undergo multiple quality checks
              before they are approved for packaging and distribution.
            </p>
          </div>

          {/* RIGHT IMAGES */}
          <div className="lab-images">
            <img
              src="/images/policies2.png"
              alt="NABL Certification"
              className="lab-logo"
            />
            <img
              src="/images/policies1.png"
              alt="Laboratory Testing"
              className="lab-main-img"
            />
          </div>

        </div>
      </section>
      {/* ================= LAB TESTING SECTION ================= */}
<section className="lab-testing-section">
  <div className="lab-testing-container">

    <h2 className="lab-testing-title">LAB TESTING</h2>

    <div className="lab-testing-underline">
      <span className="red"></span>
      <span className="yellow"></span>
    </div>

    <p>
      Our Quality Assurance Laboratory is fully equipped and ISO 17025:2017
      accredited, assuring quality and safety of products delivered to
      customers. The laboratory supports the entire process from raw material
      selection to final dispatch. It ensures adulteration-free raw materials,
      monitors quality during production, and verifies finished goods against
      customer specifications before dispatch.
    </p>

    <p>
      Authenticity of products is ensured through advanced chromatographic
      instruments, globally accepted testing methods, and highly experienced
      professionals. ISO 17025 accreditation guarantees accuracy, reliability,
      and international compliance of all reported results.
    </p>

    <div className="lab-testing-images">
      <img src="/images/lab1.png" alt="Lab Testing 1" />
      <img src="/images/lab2.png" alt="Lab Testing 2" />
      <img src="/images/lab3.png" alt="Lab Testing 3" />
    </div>

  </div>
</section>

    </>
  );
};

export default Policies;
