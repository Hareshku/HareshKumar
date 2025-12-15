import React from "react";
import Title from "../layouts/Title";
import styles from "./About.module.css";
// import { bannerImg } from "../../assets";
import {profileImg} from "../../assets/index.js";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title des="About me" />
      <div className={styles.aboutGrid}>
        <div className={styles.imageCard}>
          <img
            src={profileImg}
            alt="Portrait"
            className={styles.image}
          />
        </div>
        <div className={styles.bioCard}>
          <h3 className={styles.bioHeading}>I’m a passionate Software Engineer and MERN Stack developer focused on building clean, scalable, and user-centric web applications using modern technologies.</h3>
          <p className={styles.bioText}>
            With a strong foundation in MERN Stack development, I craft clean, scalable, and user-centric web applications using modern technologies. My experience with React.js enables me to build modular components, manage application state efficiently, and integrate APIs seamlessly while delivering responsive and intuitive user interfaces.
          </p>
          <p className={styles.bioText}>
            Through professional internships and real-world projects, I have collaborated with international teams to deliver production-ready applications with a strong focus on performance, accessibility, and cross-browser compatibility. My hands-on expertise in Node.js, Express, MongoDB, and MySQL allows me to understand the complete development lifecycle and contribute effectively to robust full-stack solutions.
          </p>
          <p className={styles.bioText}>
           Beyond industry experience, I actively participate in international hackathons and global tech events, contributing to AI-powered platforms, open-source developer tools, Brain–Computer Interface systems, and digital marketplaces for social impact. These experiences have sharpened my problem-solving abilities, strengthened collaboration skills, and deepened my commitment to building technology that creates real-world value.
          </p>
          <p className={styles.bioText}>
           Driven by continuous learning and collaboration, I enjoy transforming ideas into impactful digital products and contributing solutions that make a meaningful difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
