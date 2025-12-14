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
          <h3 className={styles.bioHeading}>Bio</h3>
          <p className={styles.bioText}>
            I’m a web developer who enjoys pairing clean interfaces with solid engineering. I focus on building responsive, accessible experiences, keeping performance in mind from the first component to deployment.
          </p>
          <p className={styles.bioText}>
            Recent work spans portfolio sites, dashboards, and landing pages—usually built with React, modern CSS, and thoughtful motion. I like collaborating closely with teams to turn ideas into reliable, maintainable products.
          </p>
          <p className={styles.bioText}>
            Away from the editor, I explore new design systems, refine workflows, and keep sharpening skills so every project ships a bit better than the last.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
