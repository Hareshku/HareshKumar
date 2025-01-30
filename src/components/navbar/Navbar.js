import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { logo } from '../../assets';
import { navLinksdata } from '../../constants';
import styles from './Navbar.module.css';
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.navbar}>
      <div>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
      <div>
        <ul className={`${styles.navLinks} mdl`}>
          {navLinksdata.map(({ _id, title, link }) => (
            <li key={_id} className={styles.navLink}>
              <Link activeClass="active" to={link} spy={true} smooth={true} offset={-70} duration={500}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span onClick={() => setShowMenu(!showMenu)} className={`${styles.menuButton} mdl:hidden`}>
          <FiMenu />
        </span>
        {showMenu && (
          <div className={styles.sidebar}>
            <div className={styles.sidebarContent}>
              <div>
                <img className={styles.sidebarLogo} src={logo} alt="logo" />
                <p className={styles.sidebarDescription}>
                  I am a Software Engineer specializing in MERN Stack Development, with six months of experience as a React Developer. I create responsive, user-friendly, and visually appealing websites that deliver seamless user experiences. Customer satisfaction is my top priority, and I am committed to staying up-to-date with the latest web technologies to build innovative and high-performance applications.
                </p>
              </div>
              <ul className={styles.sidebarLinks}>
                {navLinksdata.map((item) => (
                  <li key={item._id} className={styles.sidebarLink}>
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={styles.findMe}>
                <h2>Find me in</h2>
                <div className={styles.socialIcons}>
            <a href="https://github.com/Hareshku" target="blank">
              <span className={styles.socialIcon}>
                <FaGithub />
              </span>
            </a>
            <a href="https://www.facebook.com/share/1E6w8NiGtU/" target="blank">
              <span className={styles.socialIcon}>
                <FaFacebookF />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/haresh-kumar-9bb353251/" target="blank">
              <span className={styles.socialIcon}>
                <FaLinkedinIn />
              </span>
            </a>
          </div>
              </div>
              <span onClick={() => setShowMenu(false)} className={styles.closeButton}>
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
