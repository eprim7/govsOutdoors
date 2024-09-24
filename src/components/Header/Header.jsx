import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";

function Header() {
  useEffect(() => {
    const hamburger = document.querySelector(`.${styles.hamburger}`);
    const navMenu = document.querySelector(`.${styles['nav-menu']}`);

    const handleHamburgerClick = () => {
      hamburger.classList.toggle(styles.active);
      navMenu.classList.toggle(styles.active);
    };

    const handleNavLinkClick = () => {
      hamburger.classList.remove(styles.active);
      navMenu.classList.remove(styles.active);
    };

    hamburger.addEventListener("click", handleHamburgerClick);
    document.querySelectorAll(`.${styles['nav-link']}`).forEach((link) =>
      link.addEventListener("click", handleNavLinkClick)
    );

    // Cleanup function to remove event listeners on component unmount
    return () => {
      hamburger.removeEventListener("click", handleHamburgerClick);
      document.querySelectorAll(`.${styles['nav-link']}`).forEach((link) =>
        link.removeEventListener("click", handleNavLinkClick)
      );
    };
  }, []);

  return (
    <>
      <header>
        <nav className={styles.navbar}>
            <div className={styles['logo-container']}>
          <h1 className={styles['nav-branding']}>
            <img src={logo} alt="logo" className={styles.logo} />
            <Link to="/">Gov's Outdoors</Link>
          </h1>
          </div>
          <ul className={styles['nav-menu']}>
            <li className={styles['nav-item']}>
              <p className={styles['nav-link']}>
                <Link to="/">Home</Link>
              </p>
            </li>
            <li className={styles['nav-item']}>
              <p className={styles['nav-link']}>
                <Link to="/schedule">Schedule</Link>
              </p>
            </li>
            <li className={styles['nav-item']}>
              <p className={styles['nav-link']}>
                <Link to="/trips">Trips</Link>
              </p>
            </li>
            <li className={styles['nav-item']}>
              <p className={styles['nav-link']}>
                <Link to="/events">Events</Link>
              </p>
            </li>
            <li className={styles['nav-item']}>
              <p className={styles['nav-link']}>
                <Link to="/gear">Gear</Link>
              </p>
            </li>
            <li className={styles['nav-item']}>
              <p className={styles['nav-link']}>
                <Link to="/about">About</Link>
              </p>
            </li>
            <li className={styles['nav-item']}>
              <p className={styles['nav-link']}>
                <Link to="/profile">Profile</Link>
              </p>
            </li>
          </ul>
          <div className={styles.hamburger}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;