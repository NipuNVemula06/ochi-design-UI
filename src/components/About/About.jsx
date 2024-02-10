import React from "react";
import "./About.css";
import homepage from "../../assets/homepage.jpg";
import { GoArrowUpRight } from "react-icons/go";

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.2"
      data-scroll-section
      className="about"
    >
      <div className="about-textcontainer container">
        <h1 className="about-heading">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to <u className="about-underline">raise funds</u> ,{" "}
          <u className="about-underline">sell products</u>,{" "}
          <u className="about-underline">explain complex ideas</u> , and{" "}
          <u className="about-underline">hire great people.</u>
        </h1>
      </div>
      <div className="about-sectionone container">
        <p>What can we expect: </p>
        <div className="about-info">
          <p>
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it's live or digital,
            delivered for one or a hundred people.
          </p>
          <p>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
      </div>
      <div className="about-ourapproach container">
        <div className="about-ourapproach-button">
          <h2>Our Approach: </h2>
          <a href="/" className="about-ourapproach-link">
            <span>Read more</span>
            <GoArrowUpRight className="about-ourapproach-icon" />
          </a>
        </div>
        <div className="about-imagecontainer">
          <img src={homepage} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default About;
