import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, project_4, project_5, project_6 } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.titleContainer}>
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className={styles.projectsGrid}>
        <ProjectsCard
          title="Personal Portfolio"
          des="I have created my personal portfolio using html and CSS and javascript. I create this portfolio to enhance my front-end skills."
          src={projectOne}
          live_demo="https://hareshku.github.io/haresh-kumar/"
        />
        <ProjectsCard
          title="React Portfolio"
          des="As a React Developer Intern at CodingSamurai, I was assigned the task of creating this personal portfolio using React.js."
          src={projectTwo}
          live_demo="https://hareshku.github.io/HareshKumar/"
        />
        <ProjectsCard
          title="E-commerce Website"
          des="As a React Developer Intern at CodingSamurai, I was assigned the task of creating this e-commerce website using React.js and Redux."
          src={projectThree}
          live_demo="https://github.com/Hareshku/E-commerce-website"
        />
        <ProjectsCard
          title="Smart Lost and Find"
          des="As my 7th-semester final project for the Web Engineering course, I developed this website for a lost and found items using HTML, CSS, and JavaScript, Express, NodeJs and MySQL."
          src={project_4_1}
          live_demo="https://lost-and-found-portal.vercel.app/"
        />
        <ProjectsCard
          title="E-Learning Mobile App"
          des="As my 6th-semester final project for the Mobile App Development course, I developed this E-learning mobile application for learning through online courses using Flutter."
          src={project_5}
          live_demo="https://github.com/Hareshku/E-Learning-app_6th_semester_project"
        />
        <ProjectsCard
          title="Product Sale Dashboard"
          des="I developed this product sale dashboard using React.js and Chart.js for Networkalgo Business Solution, offering real-time data visualization to track sales metrics and performance efficiently."
          src={project_6}
          live_demo="https://hareshku.github.io/Sale-dashboard/"
        />
      </div>
    </section>
  );
};

export default Projects;
