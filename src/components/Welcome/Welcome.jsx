import React, { useEffect, useState } from "react";
import styles from './Welcome.module.css';

function Welcome() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
        const storedEmail = localStorage.getItem("userEmail");

        setIsLoggedIn(loggedInStatus);
        setUserEmail(storedEmail || "");
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);
    
    if (!isLoggedIn || !isVisible) return null;


    return (
        <>
            {isLoggedIn && <div className={styles.container}>
                <span className={styles.span}>Welcome to Gov's Outdoors {userEmail}</span>
                </div>}
        </>
    );
}

export default Welcome;

