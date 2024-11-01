import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check localStorage for login status on mount
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleLogout = () => {
    // Remove login status from localStorage
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false); // Update state
    navigate("/"); // Redirect to home page or login page
  };

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
    <header>
      <nav className={styles.navbar}>
        <div className={styles['logo-container']}>
          <h1 className={styles['nav-branding']}>
            <img src="/assets/logo.png" alt="logo" className={styles.logo} />
            <Link to="/">Gov's Outdoors</Link>
          </h1>
        </div>
        <ul className={styles['nav-menu']}>
          <li className={styles['nav-item']}><Link to="/" className={styles['nav-link']}>Home</Link></li>
          <li className={styles['nav-item']}><Link to="/schedule" className={styles['nav-link']}>Schedule</Link></li>
          <li className={styles['nav-item']}><Link to="/trips" className={styles['nav-link']}>Trips</Link></li>
          <li className={styles['nav-item']}><Link to="/events" className={styles['nav-link']}>Events</Link></li>
          <li className={styles['nav-item']}><Link to="/gear" className={styles['nav-link']}>Gear</Link></li>
          <li className={styles['nav-item']}><Link to="/cart" className={styles['nav-link']}>Cart</Link></li>
          <li className={styles['nav-item']}><Link to="/about" className={styles['nav-link']}>About</Link></li>
          <li className={styles['nav-item']}>
            <p className={styles['nav-link']}>
              {isLoggedIn ? (
                <span onClick={handleLogout} style={{ cursor: "pointer" }}>Logout</span>
              ) : (
                <Link to="/login">Login</Link>
              )}
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
  );
}

export default Header;
