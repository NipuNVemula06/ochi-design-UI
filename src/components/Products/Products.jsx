import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <div data-scroll data-scroll-section className="products">
      <div className="container">
        <div id="items" className="products-items">
          <div className="product-item">
            <div className="product-imagecontainer">
              <img
                src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
                alt="logo"
                width="150"
                height="150"
              />
            </div>
            <div className="product-content">
              <div>
                <span className="product-btn">&copy; 2024 - 2025</span>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div className="product-imagecontainer">
              <img
                src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
                alt="clutch"
                width="150"
                height="150"
              />
            </div>
            <div className="product-content">
              <div>
                <a href="/" className="product-link">
                  rating 5.0 on clutch
                </a>
              </div>
            </div>
          </div>
          <div className="product-item">
            <div className="product-imagecontainer">
              <img
                src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
                alt="futur"
                width="104"
                height="102"
              />
            </div>
            <div className="product-content">
              <div>
                <a href="/" className="product-link">
                  business bootcamp alumni
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
