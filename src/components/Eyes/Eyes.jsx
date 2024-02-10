import React, { useState, useEffect } from "react";
import "./Eyes.css";

const Eyes = () => {
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
  return (
    <div className="eyes">
      <div className="outerlayer">
        <div
          id="eye"
          style={{ transform: `rotate(${angle}deg)` }}
          className="eye"
        >
          <div className="eye-rotateline">
            <div className="dot"></div>
          </div>
        </div>
      </div>
      <div className="outerlayer">
        <div
          id="eye"
          style={{ transform: `rotate(${angle}deg)` }}
          className="eye"
        >
          <div className="eye-rotateline">
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
