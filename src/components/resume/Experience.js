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
      <div>
        <div className={styles.resumeSection}>
          <ResumeCard
            title="Web Developer Intern"
            subTitle="National Freelancing Training Program - (2022 - 23)"
            result="Jamshoro"
            des="As a web developer intern, I worked on multiple projects, including the front-end and back-end part of the project."
          />
        </div>
      </div>
      <div>
        <div className={styles.resumeSection}>
          <ResumeCard
            title="React Developer Intern"
            subTitle="NetworkAlgo Business Solution (2024 - 2025)"
            result="India"
            des="I am working as a react developer in NetworkAlgo Business Solution. I am handled the front-end part of the project."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
