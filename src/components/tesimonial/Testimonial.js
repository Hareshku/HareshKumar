import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import styles from './Testimonial.module.css';
import { testimonialOne, testimonialTwo, testimonial_3, quote } from "../../assets";

function SampleNextArrow({ onClick }) {
  return (
    <div className={styles.nextArrow} onClick={onClick}>
      <HiArrowRight className={styles.arrowIcon} />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className={styles.prevArrow} onClick={onClick}>
      <HiArrowLeft className={styles.arrowIcon} />
    </div>
  );
}

const Title = ({ title, des }) => {
  return (
    <div className={styles.titleContainer}>
      <h3 className={styles.subTitle}>{title}</h3>
      <h1 className={styles.mainTitle}>{des}</h1>
    </div>
  );
};

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: dots => (
      <div className={styles.dotsContainer}>
        <ul className={styles.dotsList}>{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className={`${styles.dot} ${i === dotActive ? styles.activeDot : ''}`} />
    ),
  };

  return (
    <section id="testimonial" className={styles.testimonialSection}>
      <div className={styles.titleWrapper}>
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          {/* Slide One */}
          <div className={styles.slide}>
            <div className={styles.slideContent}>
              <div className={styles.profileCard}>
                <img
                  className={styles.profileImage}
                  src={testimonialOne}
                  alt="testimonialOne"
                />
                <div className={styles.profileInfo}>
                  <p className={styles.company}>Boundless Journeys</p>
                  <h3 className={styles.name}>Issac Ellis</h3>
                  <p className={styles.position}>Project Manager</p>
                </div>
              </div>
              <div className={styles.testimonialContent}>
                <img className={styles.quoteImage} src={quote} alt="quote" />
                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialHeader}>
                    <div>
                      <h3 className={styles.projectTitle}>
                        Travel agency website.
                      </h3>
                      <p className={styles.projectDate}>
                        via Upwork - Mar 4, 2023 - June 30, 2023
                      </p>
                    </div>
                    <div className={styles.rating}>
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className={styles.testimonialText}>
                    Working with Haresh on our travel agency website has been an absolute pleasure. 
                    From the very beginning, his communication throughout the project was outstanding. 
                    I am impressed by your skills. I will gladly recommend your services to anyone 
                    looking for a talented web developer. I look forward to working with you again 
                    on future projects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Two */}
          <div className={styles.slide}>
            <div className={styles.slideContent}>
              <div className={styles.profileCard}>
                <img
                  className={styles.profileImage}
                  src={testimonialTwo}
                  alt="testimonialTwo"
                />
                <div className={styles.profileInfo}>
                  <p className={styles.company}>Bound - Trolola</p>
                  <h3 className={styles.name}>Edgar Davids</h3>
                  <p className={styles.position}>E-Commerce Manager</p>
                </div>
              </div>
              <div className={styles.testimonialContent}>
                <img className={styles.quoteImage} src={quote} alt="quote" />
                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialHeader}>
                    <div>
                      <h3 className={styles.projectTitle}>
                        E-Commerce Website.
                      </h3>
                      <p className={styles.projectDate}>
                        via Upwork - July 25, 2023 - Sep 30, 2023
                      </p>
                    </div>
                    <div className={styles.rating}>
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className={styles.testimonialText}>
                    Working with Haresh on our e-commerce website has been an absolute pleasure. 
                    The website he delivered is exactly what I envisioned—modern, functional, and user-friendly. 
                    Haresh's attention to detail, especially in creating a seamless shopping experience, 
                    is truly commendable. I highly recommend his services to anyone looking for a talented web developer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Three */}
          <div className={styles.slide}>
            <div className={`${styles.slideContent} ${styles.slideThree}`}>
              <div className={styles.profileCard}>
                <img
                  className={styles.profileImage}
                  src={testimonial_3}
                  alt="testimonialThree"
                />
                <div className={styles.profileInfo}>
                  <p className={styles.company}>Bound - Trolola</p>
                  <h3 className={styles.name}>David Cameron</h3>
                  <p className={styles.position}>Business Owner</p>
                </div>
              </div>
              <div className={styles.testimonialContent}>
                <img className={styles.quoteImage} src={quote} alt="quote" />
                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialHeader}>
                    <div>
                      <h3 className={styles.projectTitle}>
                        E-Learning Mobile App
                      </h3>
                      <p className={styles.projectDate}>
                        via Upwork - May 4, 2024 - July 30, 2024
                      </p>
                    </div>
                    <div className={styles.rating}>
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className={styles.testimonialText}>
                    Working with Haresh on our e-learning mobile app has been an absolute pleasure. 
                    He is a talented developer who is able to bring your vision to life. 
                    Haresh is always available to answer questions and provide guidance. 
                    I highly recommend his services to anyone looking for a skilled app developer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;