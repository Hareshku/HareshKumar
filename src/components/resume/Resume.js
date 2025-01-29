import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import styles from "./Resume.module.css";

const Resume = () => {
  const [selectedTab, setSelectedTab] = useState("education"); // Default to 'education'

  return (
    <section id="resume" className={styles.container}>
      <div className={styles.titleContainer}>
        <Title des="My Resume" />
      </div>
      <div>
        <ul className={styles.tabList}>
          {/* Education Tab */}
          <li
            onClick={() => setSelectedTab("education")}
            className={`${styles.tabItem} ${
              selectedTab === "education" ? styles.tabItemActive : styles.border_transparent
            }`}
          >
            Education
          </li>

          {/* Professional Skills Tab */}
          <li
            onClick={() => setSelectedTab("skills")}
            className={`${styles.tabItem} ${
              selectedTab === "skills" ? styles.tabItemActive : styles.border_transparent
            }`}
          >
            Professional Skills
          </li>

          {/* Experience Tab */}
          <li
            onClick={() => setSelectedTab("experience")}
            className={`${styles.tabItem} ${
              selectedTab === "experience" ? styles.tabItemActive : styles.border_transparent
            }`}
          >
            Experience
          </li>
        </ul>
      </div>

      {/* Render the content based on the selected tab */}
      {selectedTab === "education" && <Education />}
      {selectedTab === "skills" && <Skills />}
      {selectedTab === "experience" && <Experience />}
    </section>
  );
};

export default Resume;
