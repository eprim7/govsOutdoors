import React, { useEffect, useState } from "react";
import styles from './Welcome.module.css';

function Welcome() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
        const storedEmail = localStorage.getItem("userEmail");
        const justLoggedIn = localStorage.getItem("justLoggedIn") === "true";

        setIsLoggedIn(loggedInStatus);
        setUserEmail(storedEmail || "");

        if (justLoggedIn) {
            setIsVisible(true); // Show the welcome message
            localStorage.removeItem("justLoggedIn"); // Clear the flag
        }
    }, []);

    // Separate effect to handle the timer
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setIsVisible(false); // Hide the message after 3 seconds
            }, 3000);

            return () => clearTimeout(timer); // Cleanup timer on component unmount
        }
    }, [isVisible]); // Only run when isVisible changes

    if (!isLoggedIn || !isVisible) return null;

    return (
        <div className={styles.container}>
            <span className={styles.span}>Welcome to Gov's Outdoors {userEmail}</span>
        </div>
    );
}

export default Welcome;






