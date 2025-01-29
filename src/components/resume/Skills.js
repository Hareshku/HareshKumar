import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className={`${styles.container} ${styles.largerContainer}`}
    >
      <div className={`${styles.section} ${styles.halfSection}`}>
        <div className={styles.header}>
          <h2 className={`${styles.title} ${styles.largerTitle}`}>Technical Skills</h2>
        </div>
        <div className={styles.skillGroup}>
          {[
            { name: 'C++', percentage: 80 },
            { name: 'Java', percentage: 80 },
            { name: 'DSA', percentage: 80 },
            { name: 'JavaScript', percentage: 90 },
            { name: 'React', percentage: 95 },
            { name: 'NodeJS', percentage: 80 },
            { name: 'Express', percentage: 70 },
            { name: 'SQL', percentage: 95 },
            { name: 'MongoDB', percentage: 85 },
          ].map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <p className={styles.skillName}>{skill.name}</p>
              <span className={styles.progressBar}>
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className={styles.progress}
                  style={{ width: `${skill.percentage}%` }}
                >
                  <span className={styles.progressText}>{skill.percentage}%</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.section} ${styles.halfSection}`}>
        <div className={styles.header}>
          <h2 className={`${styles.title} ${styles.largerTitle}`}>Professional Skills</h2>
        </div>
        <div className={styles.skillGroup}>
          {[
            { name: 'Problem Solving', percentage: 90 },
            { name: 'Creativity', percentage: 95 },
            { name: 'Communication', percentage: 90 },
            { name: 'Team Work', percentage: 85 },
          ].map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <p className={styles.skillName}>{skill.name}</p>
              <span className={styles.progressBar}>
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className={styles.progress}
                  style={{ width: `${skill.percentage}%` }}
                >
                  <span className={styles.progressText}>{skill.percentage}%</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
