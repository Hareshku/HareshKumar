import React from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import styles from './banner.module.css';

const Banner = () => {
  return (
    <section
      id="home"
      className={styles.bannerSection}
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
