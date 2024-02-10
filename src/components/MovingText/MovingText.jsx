import React from "react";
import "./MovingText.css";

const MovingText = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="0"
      data-scroll-section
      className="movingtext"
    >
      <div className="movingtext-container">
        <div className=" outline">
          <div className="container">
            <div className="movingtext-content">
              <div className="moving-text">We are ochi &nbsp;</div>
              <div className="moving-text">We are ochi &nbsp;</div>
              <div className="moving-text">We are ochi &nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingText;
