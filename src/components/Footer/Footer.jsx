import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-top">
            <h1 className="footer-heading">
              Eye -<br></br>
              Opening
            </h1>
            <div className="footer-links-section">
              <h1 className="footer-heading">Presentations</h1>
              <div className="footer-socials">
                <span>S:</span>
                <ul>
                  <li>Instragam</li>
                  <li>Behance</li>
                  <li>Facebook</li>
                  <li>LinkedIn</li>
                </ul>
              </div>
              <div className="footer-content">
                <div className="footer-info">
                  <div className="footer-location">
                    <span>L:</span>
                    <span>
                      <p>202-1965 W 4th Ave</p>
                      <p> Vancouver, Canada</p>
                    </span>
                    <span>
                      <p>30 Chukarina St</p>
                      <p> Lviv, Ukraine</p>
                    </span>
                  </div>
                  <div className="footer-email">
                    <span>E:</span>
                    <p>Hello@design.in</p>
                  </div>
                </div>
                <div className="footer-menu">
                  <span>M:</span>
                  <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Our work</li>
                    <li>About us</li>
                    <li>Insights</li>
                    <li>Contact us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="footer-copyright">
              <h3>&copy; ochi.design 2024 Legal Terms</h3>
              <span>Website by Nipun Vemula</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
