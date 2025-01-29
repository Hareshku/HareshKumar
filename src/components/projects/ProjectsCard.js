import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import styles from './ProjectsCard.module.css';

const ProjectsCard = ({ title, des, src, live_demo }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={src}
          alt="src"
        />
      </div>
      <div className={styles.content}>
        <div>
          <div className="flex items-center justify-between">
            <h3 className={styles.title}>
              {title}
            </h3>
            <div className="flex gap-2">
              <a href={live_demo} className={styles.link}>Live Demo</a>
            </div>
          </div>
          <p className={styles.description}>
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;
