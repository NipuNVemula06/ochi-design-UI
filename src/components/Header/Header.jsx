import React, { useEffect, useState } from "react";
import "./Header.css";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import logoOpen from "../../assets/logo-open.svg";
import { motion } from "framer-motion";

import { LINKS } from "../../data";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleMenuClose = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleMenuClose);
    return () => {
      window.removeEventListener("resize", handleMenuClose);
    };
  }, []);

  useEffect(() => {
    const checkscrolling = () => {
      const currentScrollPosition = window.scrollY;
      setScrollPosition(currentScrollPosition);
      setVisible(
        currentScrollPosition < 40 || currentScrollPosition < scrollPosition
      );
    };
    window.addEventListener("scroll", checkscrolling);
    return () => {
      window.removeEventListener("scroll", checkscrolling);
    };
  }, [visible, scrollPosition]);

  return (
    <motion.header
      initial={{ top: 0 }}
      animate={{ top: visible ? "0" : "-100%" }}
      transition={{ duration: 0.3, type: "keyframes" }}
      className="header"
    >
      <div className="container">
        <div className="header-content">
          <div className="header-logo">
            <a href="/">
              <img
                src={logoOpen}
                alt="Logo"
                style={open ? { filter: "brightness(0) invert(1)" } : {}}
              />
            </a>
          </div>
          <div className="header-nav">
            <ul className="header-links">
              {LINKS.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="link">
                    <span className="link-inner">
                      <span>{item.title}</span>
                      <span>{item.title}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="header-menu">
            <div onClick={() => setOpen(!open)} className="header-menuicon">
              {open ? (
                <img
                  src={close}
                  alt="close"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              ) : (
                <img src={menu} alt="menu-icon" />
              )}
            </div>
          </div>
        </div>
      </div>
      {open && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, type: "just" }}
          className="header-mobile"
        >
          <ul className="header-mobilelinks">
            {LINKS.map((item, index) => (
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, type: "keyframes" }}
                key={index}
              >
                <a href={item.link}>{item.title}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
