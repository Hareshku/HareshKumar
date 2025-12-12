import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <div className={styles.contentWrapper}>
        <Banner />
        <About />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
