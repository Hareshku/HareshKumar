import React from 'react';
import { HiArrowRight } from "react-icons/hi";
import styles from './Card.module.css';

const Card = ({ title, des, icon }) => {
  return (
    <div className={`${styles.card} group`}>
      <div className={styles.contentWrapper}>
        <div className={`${styles.content} group-hover:translate-y-0`}>
          <div className={styles.iconWrapper}>
            {icon ? (
              <span className={styles.icon}>{icon}</span>
            ) : (
              <>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
              </>
            )}
          </div>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{des}</p>
            <span className={styles.arrowIcon}>
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;