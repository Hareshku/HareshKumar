import React from 'react';
import { bannerImg } from "../../assets/index";
import styles from './RightBanner.module.css';

const RightBanner = () => {
  return (
    <div className={styles.rightBanner}>
      <img
        className={styles.bannerImg}
        src={bannerImg}
        alt="bannerImg"
      />
      <div className={styles.gradientBox}></div>
    </div>
  );
};

export default RightBanner;
