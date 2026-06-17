import React from 'react';
import Title from '../layouts/Title';
import styles from './Achievements.module.css';

const achievements = [
  {
    id: 1,
    title: "CS50x Puzzle Day 2026",
    highlight: "Harvard University",
    text: "Solved all 10/10 puzzles with my team at Harvard University."
  },
  {
    id: 2,
    title: "Stanford University Code in Place",
    highlight: "Section Leader",
    text: "Selected Section Leader to teach Python to 100+ international students."
  },
  {
    id: 3,
    title: "Yale Peaked Hackathon 2026",
    highlight: "70th Rank",
    text: "Ranked 70th globally by successfully solving 6/10 Peak Circuit challenges using quantum circuit analysis and simulation techniques."
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className={styles.section}>
      <Title des="My Achievements" />
      <div className={styles.scrollContainer}>
        <div className={styles.scrollTrack}>
          {achievements.map((achievement) => (
            <div key={achievement.id} className={styles.achievementCard}>
              <div className={styles.quoteIcon}>"</div>
              <h3 className={styles.achievementTitle}>{achievement.title}</h3>
              <p className={styles.achievementText}>
                {achievement.text.split(achievement.highlight).map((part, index, array) =>
                  index < array.length - 1 ? (
                    <span key={index}>
                      {part}
                      <span className={styles.highlight}>{achievement.highlight}</span>
                    </span>
                  ) : part
                )}
              </p>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {achievements.map((achievement) => (
            <div key={`${achievement.id}-duplicate`} className={styles.achievementCard}>
              <div className={styles.quoteIcon}>"</div>
              <h3 className={styles.achievementTitle}>{achievement.title}</h3>
              <p className={styles.achievementText}>
                {achievement.text.split(achievement.highlight).map((part, index, array) =>
                  index < array.length - 1 ? (
                    <span key={index}>
                      {part}
                      <span className={styles.highlight}>{achievement.highlight}</span>
                    </span>
                  ) : part
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;