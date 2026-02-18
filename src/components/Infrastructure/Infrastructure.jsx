import React from "react";
import { Link } from "react-router-dom";
import "./Infrastructure.css";

const Infrastructure = () => {
  return (
    <>
      {/* INFRASTRUCTURE HERO */}
      <section
        className="infra-hero"
        style={{ backgroundImage: "url('/images/infra1.png')" }}
      >
        <div className="infra-overlay">
          <div className="infra-content">

            <div className="infra-text">
              <h1>INFRASTRUCTURE</h1>
              <h2>
                STATE OF THE ART <br />
                MANUFACTURING FACILITY,
              </h2>
              <p>SPREAD OVER AN AREA OF 4.5 LAKH SQFT</p>
            </div>

            <div className="infra-btn">
              <Link to="/contact">ENQUIRE NOW</Link>
            </div>

          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE DETAILS */}
      <section className="infra-details">
        <div className="infra-details-container">
          <p>
            It is here that our products are manufactured, under the
            state-of-the-art machinery that conforms to the world-class
            quality standards and in an environment free of pollution.
          </p>

          <p>
            The products that we manufacture are first procured in raw form
            from the agricultural fields. They are then processed under
            high-end machines in various units in our factory including
            Buhler machines, fumigation chambers, drum-type roasters and
            integrated packaging units.
          </p>

          <p>
            During multiple stages of processing, raw spices are milled,
            sieved, cleaned and finely ground while retaining their
            natural aroma and freshness.
          </p>
        </div>
      </section>

      {/* PRIVATE LABEL PACKAGING */}
      <section className="plp-section">
        <div className="plp-container">

          <h2 className="plp-title">
            END TO END PRIVATE LABEL PACKAGING
          </h2>

          <div className="plp-underline">
            <span className="red"></span>
            <span className="yellow"></span>
          </div>

          <div className="plp-image">
            <img
              src="/images/infra.png"
              alt="Private Label Packaging"
            />
          </div>

        </div>
      </section>
      {/* PRIVATE LABEL PACKAGING */}
<section className="plp-section">
  <div className="plp-container">

    

    <div className="plp-underline">
      <span className="red"></span>
      <span className="yellow"></span>
    </div>

    <p className="plp-text">
      We take pride in being one of India’s leading packaging and labelling
      facilities. In addition to spice processing, we offer comprehensive
      packaging solutions to clients across the country.
    </p>

    <p className="plp-text">
      From concept and design to manufacturing and labelling, our experienced
      packaging specialists deliver complete end-to-end solutions. We support
      every aspect of packaging including format selection, size and shape
      customization, creative design, labelling and barcoding.
    </p>

    <p className="plp-text">
      Clients can choose from a wide range of packaging options such as pillow
      pouches, mono cartons, boxes, PET jars and grinders. Our design and
      marketing experts also collaborate closely with clients to develop
      packaging formats tailored to specific brand and market requirements.
    </p>

    
    <div className="plp-btn">
      <Link to="/contact">ENQUIRE NOW</Link>
    </div>

  </div>
</section>

    </>
  );
};

export default Infrastructure;
