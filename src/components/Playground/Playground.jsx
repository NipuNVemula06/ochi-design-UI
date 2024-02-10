import React, { useState, useEffect } from "react";
import "./Playground.css";
import bgImage from "../../assets/Top-Viewbbcbv-1-scaled.jpg";

const Playground = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const eye = document.getElementById("eye");
      const rect = eye.getBoundingClientRect();
      const anchorX = rect.left + rect.width / 2;
      const anchorY = rect.top + rect.height / 2;

      const angle = getAngle(mouseX, mouseY, anchorX, anchorY);
      setAngle(angle);
    });
  }, []);

  const getAngle = (mouseX, mouseY, anchorX, anchorY) => {
    const deltaX = anchorX - mouseX;
    const deltaY = anchorY - mouseY;
    const radian = Math.atan2(deltaY, deltaX);
    const degree = (radian * 180) / Math.PI;
    return degree;
  };

  // data-scroll
  //       data-scroll-section
  //       data-scroll-speed="-0.6"

  return (
    <div className="playground">
      <div className="pg-wrapper">
        <div className="pg-imagewrapper">
          <img
            src={bgImage}
            alt="image"
            width="1440"
            height="921"
            className="pg-image"
          />
        </div>
        <div className="pg-eyeswrapper">
          <div className="playground-outerlayer">
            <div
              id="eye"
              style={{ transform: `rotate(${angle}deg)` }}
              className="eye"
            >
              <div className="eye-rotateline">
                <div className="playground-dot"></div>
              </div>
            </div>
          </div>
          <div className="playground-outerlayer">
            <div
              id="eye"
              style={{ transform: `rotate(${angle}deg)` }}
              className="eye"
            >
              <div className="eye-rotateline">
                <div className="playground-dot"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <div>eyes</div>
            <div>button</div> */}
      </div>
    </div>
  );
};

export default Playground;

{
  /* <div className="playground-eyes">
          
        </div> */
}
