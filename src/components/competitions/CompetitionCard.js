import React from 'react';
import styles from './CompetitionCard.module.css';

const CompetitionCard = ({ name, location, project, link, role, techStack, src }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={src}
          alt={name}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{name}</h3>
          <span className={styles.location}>{location}</span>
        </div>
        <div className={styles.details}>
          <p className={styles.detail}>
            <span className={styles.label}>Role:</span> {role}
          </p>
          <p className={styles.detail}>
            <span className={styles.label}>Project:</span> {project}
            {link && (
              <a
                href={link}
                className="text-blue-500 hover:text-blue-700 underline ml-1"
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
            )}

          </p>
          <p className={styles.detail}>
            <span className={styles.label}>Tech Stack:</span> {techStack}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompetitionCard;
