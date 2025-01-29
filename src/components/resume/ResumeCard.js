import React from "react";
import styles from "./ResumeCard.module.css";

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className={styles.container}>
      <div className={styles.timeline}>
        <span className={styles.timelineDot}>
          <span className={`${styles.innerDot} group-hover:${styles.innerDotHover}`}></span>
        </span>
      </div>
      <div className={`${styles.card} group-hover:${styles.cardHover}`}>
        <div className={`${styles.header} lgl:${styles.headerLarge}`}>
          <div>
            <h3
              className={`${styles.title} md:${styles.titleLarge} group-hover:${styles.titleHover}`}
            >
              {title}
            </h3>
            <p
              className={`${styles.subtitle} group-hover:${styles.subtitleHover}`}
            >
              {subTitle}
            </p>
          </div>
          <div>
            <p className={styles.result}>{result}</p>
          </div>
        </div>
        <p
          className={`${styles.description} md:${styles.descriptionLarge} group-hover:${styles.descriptionHover}`}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
