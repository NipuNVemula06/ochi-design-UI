import React, { useState, useEffect } from "react";
import "./Hero.css";
import contentimage from "../../assets/content-image01.jpg";
import { CgArrowTopRight } from "react-icons/cg";
import { motion } from "framer-motion";

const Hero = () => {
  const [width, setWidth] = useState("8rem");

  useEffect(() => {
    const getWidth = () => {
      const windowSize = typeof window === "undefined" ? {} : window.innerWidth;
      if (windowSize <= 576) {
        setWidth("64px");
      } else if (windowSize > 576 && windowSize <= 768) {
        setWidth("90px");
      } else if (windowSize > 786 && windowSize <= 1024) {
        setWidth("100px");
      } else {
        setWidth("8rem");
      }
    };
    window.addEventListener("resize", getWidth);
    return () => {
      window.removeEventListener("resize", getWidth);
    };
  }, []);

  return (
    <div
      data-scroll
      data-scroll-speed="-.5"
      data-scroll-section
      className="hero"
    >
      <div className="hero-container">
        <div className="container">
          <h1 className="hero-title">
            <div>We create</div>
            <div className="hero-imagecontainer">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: width }}
                transition={{
                  ease: [0.76, 0, 0.24, 1],
                  duration: 1,
                }}
                className="hero-image"
              >
                <img src={contentimage} alt="content-image" />
              </motion.div>
              eye-opening
            </div>
            <div>presentations</div>
          </h1>
          <div className="hero-siteofday">
            <svg width="53.08" height="171.358">
              <path
                class="js-color-bg"
                fill="#E73C37"
                d="M0 0h53.08v171.358H0z"
              ></path>
              <g class="js-color-text" fill="#fff">
                <path d="M30.016 151.575a3.599 3.599 0 0 1-2.484 1.878l-.965-1.535c.623-.155 1.126-.401 1.506-.737.38-.337.57-.768.57-1.293 0-.4-.101-.722-.301-.966-.199-.242-.504-.365-.912-.365-.254 0-.478.083-.674.249a2.423 2.423 0 0 0-.511.62c-.146.249-.331.603-.556 1.061l-.204.424c-.293.584-.66 1.052-1.104 1.403-.443.351-1.011.525-1.703.525-.516 0-.983-.119-1.402-.357-.42-.239-.748-.575-.986-1.009s-.357-.929-.357-1.483c0-1.413.619-2.378 1.855-2.895l.979 1.535c-.721.253-1.082.706-1.082 1.359 0 .282.09.526.271.73.182.205.402.308.665.308s.495-.091.694-.271a2.51 2.51 0 0 0 .512-.657c.141-.258.324-.631.548-1.118.224-.478.454-.879.687-1.206a2.76 2.76 0 0 1 .914-.803c.375-.211.83-.315 1.367-.315.613 0 1.152.139 1.614.417.463.278.819.665 1.067 1.162s.373 1.062.373 1.695a3.545 3.545 0 0 1-.381 1.644M21.627 145.02a1.13 1.13 0 0 1-.833.336c-.332 0-.61-.111-.834-.336s-.336-.502-.336-.833c0-.332.112-.608.336-.833s.502-.337.834-.337c.331 0 .608.112.833.337s.336.501.336.833c0 .331-.111.608-.336.833m1.285-1.74h7.367v1.812h-7.367v-1.812zM29.709 140.226c-.458.479-1.135.716-2.031.716h-3.216v1.141h-1.55v-1.141H21.07l-1.139-1.812h2.98v-1.945h1.55v1.945h3.187c.438 0 .748-.081.928-.242.181-.16.27-.402.27-.723 0-.244-.057-.479-.175-.702l1.462-.424c.176.38.264.779.264 1.198-.001.849-.23 1.511-.688 1.989M29.833 134.72a3.333 3.333 0 0 1-1.433 1.169c-.579.249-1.182.373-1.805.373s-1.225-.124-1.805-.373a3.347 3.347 0 0 1-1.434-1.169c-.375-.531-.563-1.196-.563-1.995 0-.77.184-1.413.549-1.93a3.282 3.282 0 0 1 1.381-1.14 4.239 4.239 0 0 1 1.711-.365h.746v5.072a1.796 1.796 0 0 0 1.168-.49c.332-.307.496-.724.496-1.249 0-.41-.092-.753-.277-1.031-.185-.277-.473-.528-.862-.753l.542-1.462c.691.303 1.223.724 1.592 1.265.371.541.557 1.235.557 2.083 0 .798-.188 1.463-.563 1.995m-4.085-3.574c-.41.088-.746.261-1.009.519s-.394.611-.394 1.06c0 .429.135.784.408 1.067s.604.458.994.526v-3.172zM29.898 122.64c-.33.565-.783.996-1.359 1.294-.574.297-1.221.445-1.943.445-.721 0-1.369-.148-1.943-.445-.576-.298-1.029-.729-1.36-1.294s-.496-1.232-.496-2.002c0-.771.165-1.438.496-2.003a3.301 3.301 0 0 1 1.36-1.293c.574-.298 1.223-.446 1.943-.446.723 0 1.369.148 1.943.446a3.293 3.293 0 0 1 1.359 1.293c.332.564.497 1.232.497 2.003.001.769-.165 1.436-.497 2.002m-1.703-3.347c-.433-.331-.967-.497-1.6-.497s-1.167.166-1.602.497c-.433.33-.649.778-.649 1.345 0 .564.217 1.013.649 1.344.435.332.969.498 1.602.498s1.167-.166 1.6-.498c.435-.331.65-.779.65-1.344.001-.567-.215-1.015-.65-1.345M24.462 115.16v.936h-1.55v-.936h-.381c-.866 0-1.516-.227-1.95-.68-.433-.453-.649-1.074-.649-1.863 0-.556.096-1.014.291-1.374l1.463.396a2.238 2.238 0 0 0-.205.876c0 .556.307.834.92.834h.512v-1.55h1.55v1.55h5.817v1.812h-5.818zM29.709 105.543c-.458.479-1.135.717-2.031.717h-3.216v1.14h-1.55v-1.14H21.07l-1.139-1.813h2.98v-1.944h1.55v1.944h3.187c.438 0 .748-.081.928-.241.181-.16.27-.402.27-.724 0-.244-.057-.478-.175-.702l1.462-.424c.176.38.264.78.264 1.199-.001.848-.23 1.51-.688 1.988M19.931 101.104v-1.812h4.166a2.805 2.805 0 0 1-.942-.973 2.622 2.622 0 0 1-.358-1.367c0-.711.188-1.271.562-1.681.376-.409.93-.614 1.66-.614h5.262v1.813H25.66c-.449 0-.779.09-.994.27-.215.181-.321.455-.321.826 0 .292.103.57.308.833.204.263.516.478.936.644.418.166.945.249 1.578.249h3.113v1.812H19.931zM29.833 91.469a3.333 3.333 0 0 1-1.433 1.169 4.545 4.545 0 0 1-3.61 0 3.345 3.345 0 0 1-1.433-1.169c-.375-.532-.563-1.197-.563-1.995 0-.771.184-1.413.549-1.93a3.284 3.284 0 0 1 1.381-1.141 4.239 4.239 0 0 1 1.711-.365h.746v5.072c.446-.02.838-.183 1.168-.49.332-.307.496-.724.496-1.249 0-.409-.092-.753-.277-1.03-.185-.278-.473-.529-.862-.753l.542-1.462c.691.302 1.223.724 1.592 1.265.371.541.557 1.234.557 2.083-.001.797-.189 1.463-.564 1.995m-4.085-3.574c-.41.088-.746.261-1.009.519-.263.259-.394.611-.394 1.061 0 .428.135.784.408 1.066s.604.458.994.526v-3.172zM20.047 80.572V77.37c0-.847.187-1.631.557-2.353.369-.721.938-1.303 1.703-1.746.764-.444 1.717-.665 2.857-.665 1.139 0 2.092.221 2.857.665.764.443 1.332 1.025 1.701 1.746.371.722.557 1.506.557 2.353v3.202H20.047zm8.478-2.601c0-.975-.251-1.791-.753-2.448-.501-.658-1.372-.987-2.608-.987-1.238 0-2.107.329-2.609.987-.502.657-.754 1.474-.754 2.448v.701h6.725v-.701zM29.812 70.685c-.39.419-.94.628-1.651.628-.731 0-1.315-.277-1.754-.833s-.658-1.306-.658-2.251v-1.286h-.321c-.36 0-.631.122-.812.365s-.271.551-.271.921c0 .633.282 1.059.849 1.271l-.352 1.535a2.326 2.326 0 0 1-1.484-.943c-.374-.512-.562-1.133-.562-1.863 0-.984.261-1.747.782-2.288.521-.54 1.289-.812 2.302-.812h4.399v1.492l-.936.19c.702.573 1.052 1.33 1.052 2.265.001.653-.194 1.19-.583 1.609m-1.382-3.246c-.277-.332-.645-.497-1.104-.497h-.146v1.213c0 .4.078.709.233.929.156.219.395.328.717.328a.655.655 0 0 0 .519-.227c.132-.151.197-.348.197-.592a1.742 1.742 0 0 0-.416-1.154M29.812 61.639l-6.9 2.674v-1.827l4.619-1.711-4.619-1.607v-1.813l10.349 3.801v1.754zM35.481 17.006l-4.782 14.969h-3.266l-2.584-9.682-2.584 9.682h-3.267l-4.783-14.969h3.713l2.674 10.275 2.525-10.275h3.444l2.525 10.275 2.674-10.275zM37.979 27.163c1.426 0 2.496 1.069 2.496 2.495 0 1.425-1.07 2.495-2.496 2.495s-2.494-1.07-2.494-2.495c-.001-1.426 1.068-2.495 2.494-2.495"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="container">
          <div className="hero-bottom-list">
            <div>For public and private companies</div>
            <div>From the first pitch to IPO</div>
            <div className="hero-bottom-link">
              <a href="" className="hero-bottom-button">
                <span className="hero-bottom-a">Start the project</span>
                <span className="hero-bottom-icon">
                  <CgArrowTopRight />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scrolldown">
        <span className="hero-scrolldown-text">Scroll down</span>
      </div>
    </div>
  );
};

export default Hero;