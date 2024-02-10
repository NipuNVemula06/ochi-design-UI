import React, { useEffect, useState } from "react";
import "./ReadyToStart.css";
import { GoDotFill } from "react-icons/go";

const ReadyToStart = () => {
  return (
    <div data-scroll data-scroll-section className="readytostart">
      <div className="readytostart-heading">
        <h1>Ready</h1>
        <h1>to start</h1>
        <h1>the project?</h1>
      </div>
      <div className="readytostart-buttons">
        <div className="readytostart-button">
          <a href="/">
            <span className="readytostart-buttontext">start the project</span>
            <span className="readytostart-icon">
              <GoDotFill />
            </span>
          </a>
        </div>
        <span>OR</span>
        <div className="readytostart-button">
          <a href="/">
            <span className="readytostart-buttontext">Hello1@Design.in</span>
            <span className="readytostart-icon">
              <GoDotFill />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReadyToStart;
