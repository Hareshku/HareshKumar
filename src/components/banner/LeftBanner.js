import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { SiAliexpress, SiJavascript, SiMongodb, SiNodedotjs } from "react-icons/si";
import styles from "./LeftBanner.module.css";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["MERN Stack developer", "Software Engineer.", "React Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.headerContainer}>
        <h4 className={styles.welcomeText}>WELCOME TO MY WORLD</h4>
        <h1 className={styles.mainHeading}>
          Hi, I'm <span className={styles.highlight }>Haresh Kumar</span>
        </h1>
        <h2 className={styles.subHeading}>
          A <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>
      </div>
      <div className={styles.infoSection}>
        <div>
          <h2 className={styles.sectionTitle}>Find me in</h2>
          <div className={styles.iconContainer}>
            <a href="https://github.com/Hareshku" target="blank">
              <span className={styles.bannerIcon}>
                <FaGithub />
              </span>
            </a>
            <a href="https://www.facebook.com/share/1E6w8NiGtU/" target="blank">
              <span className={styles.bannerIcon}>
                <FaFacebookF />
              </span>
            </a>
            <a href="https://www.instagram.com/hareesh8257/" target="blank">
              <span className={styles.bannerIcon}>
                <FaInstagramSquare />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/haresh-kumar-9bb353251/" target="blank">
              <span className={styles.bannerIcon}>
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className={styles.sectionTitle}>BEST SKILL ON</h2>
          <div className={styles.iconContainer}>
            <span className={styles.bannerIcon}>
              <FaReact />
            </span>
            <span className={styles.bannerIcon}>
              <SiAliexpress />
            </span>
            <span className={styles.bannerIcon}>
              <SiJavascript />
            </span>
            <span className={styles.bannerIcon}>
              <SiMongodb />
            </span>
            <span className={styles.bannerIcon}>
              <SiNodedotjs />
            </span>
          </div>
        </div>
      </div>
         <a 
          href="https://drive.google.com/file/d/1Q25Oy44IYMhcFmRLDcIV6NWM9u_eRrXN/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer" 
         className={styles.download_resume}
         >
        Download Resume
        </a>
    </div>
  );
};

export default LeftBanner;
