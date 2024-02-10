import React, { useState } from "react";
import "./Card.css";
import { motion, stagger } from "framer-motion";

const Card = ({ title, image, features }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="card">
      <div className="card-title">
        <span className="dot"></span>
        <span>{title}</span>
      </div>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="card-imagecontainer"
      >
        <img src={image} alt={title} />
      </div>
      <div className="card-features">
        {features.map((item) => (
          <span key={item} className="card-feature">
            {item}
          </span>
        ))}
      </div>
      <h1 className="card-headline">
        <div className="card-hovertext">
          {title.split("").map((char, index) => (
            <motion.div
              initial={{ y: "100%" }}
              animate={{
                y: isHover ? "0%" : "100%",
              }}
              transition={{
                duration: 0.3,
                type: "keyframes",
                delay: index * 0.05,
              }}
              className="card-hoverchar"
              key={index}
            >
              {char}
            </motion.div>
          ))}
        </div>
      </h1>
    </div>
  );
};

export default Card;
