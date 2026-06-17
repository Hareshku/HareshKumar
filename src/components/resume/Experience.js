import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className={styles.container}
    >
      {/* Top Row - Two cards side by side */}
      <div className={styles.topRow}>
        <div className={styles.resumeSection}>
          <ResumeCard
            title="Web Developer Intern"
            company="National Freelancing Training Program"
            date="2022 - 23"
            result="Jamshoro"
            des="As a web developer intern, I worked on multiple projects, including the front-end and back-end part of the project."
          />
        </div>
        <div className={styles.resumeSection}>
          <ResumeCard
            title="React Developer Intern"
            company="NetworkAlgo Business Solution"
            date="November 2024 - February 2025"
            result="India"
            des="I worked as a react developer in NetworkAlgo Business Solution. I handled the front-end part of the project."
          />
        </div>
      </div>

      {/* Bottom Row - Full width card */}
      <div className={styles.bottomRow}>
        <div className={styles.fullWidthSection}>
          <ResumeCard
            title="Software Engineer Intern"
            company="Pak Navy Engineering College"
            date="April 2026 - Present"
            result="Karachi, Sindh, Pakistan"
            des="Working on system design and integration for marine monitoring and control dashboards. Developing a custom Blue Robotics extension using Python to allow users to integrate and use custom maps seamlessly. Building scalable UI components and integration workflows for navigation and telemetry systems."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
