import React from 'react';
import Title from '../layouts/Title';
import CompetitionCard from './CompetitionCard';
import styles from './Competitions.module.css';
import { Podify, findUni, Farmer } from "../../assets";

const competitions = [
  {
    name: "Code with Kiro",
    location: "Washington, USA (Online)",
    project: "Podify (Meeting Summarizer)",
    link: "https://devpost.com/software/briefypod-smart-insights-for-every-episode",
    role: "React Developer",
    techStack: "React.js, Tailwind CSS, APIs",
    src: Podify,
  },
  {
    name: "GNEC Hackathon 2025 Fall",
    location: "Global NGO Executive Committee (Online)",
    project: "Farmer to Customer",
    link: "https://devpost.com/software/farmertocustomer",
    role: "Full Stack Developer",
    techStack: "React.js, Node.js, Express.js, MySQL, Tailwind CSS",
    src: Farmer,
  },
  {
    name: "Studiio Hacks 2025",
    location: "Online",
    project: "FindUni (University Finder)",
    link: "https://devpost.com/software/finduni",
    role: "Team Lead & Developer",
    techStack: "next.js+react.js, Tailwind CSS, APIs",
    src: findUni,
  },
];

const Competitions = () => {
  return (
    <section id="competitions" className={styles.section}>
      <div className={styles.titleContainer}>
        <Title
          title="HACKATHONS & COMPETITIONS"
          des="Competitions"
        />
      </div>
      <div className={styles.competitionsGrid}>
        {competitions.map((competition) => (
          <CompetitionCard
            key={competition.name}
            {...competition}
          />
        ))}
      </div>
    </section>
  );
};

export default Competitions;
