import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import styles from "../Profile/Profile.module.css";

function Profile() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [gearItems, setGearItems] = useState([]);

    useEffect(() => {
        const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
        const storedEmail = localStorage.getItem("userEmail");

        setIsLoggedIn(loggedInStatus);
        setUserEmail(storedEmail || "");

        if (loggedInStatus && storedEmail) {
            fetch("http://localhost/profile.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userEmail: storedEmail }),
            })
                .then((response) => response.json())
                .then((data) => setGearItems(data))
                .catch((error) => console.error("Error fetching data:", error));
        }
    }, []);

    return (
        <>
            <Header />
            <div className={styles.container}>
                {isLoggedIn ? (
                    <>
                        <h2 className={styles.h2}>Items Checked Out:</h2>
                        <ul className={styles.ul}>
                        {gearItems.length > 0 ? (
                            gearItems.map((item, index) => (
                                <li key={index} className={styles.li}>
                                    <span className={styles["gear-name"]}>
                                        <b>Name:</b> <i>{item.gear_name}</i>
                                    </span>
                                    <span className={styles["rent-date"]}>
                                        <b>Rented on:</b> <i>{item.rent_date}</i>
                                    </span>
                                </li>
                            ))
                        ) : (
                            <li className={styles.li}>
                                Please check a few items out and return! Happy Shopping.
                            </li>
                        )}
                    </ul>
                    </>
                ) : (
                    <h1 className={styles.restricted}>
                        Please log in to get access to this page
                    </h1>
                )}
            </div>
        </>
    );
}

export default Profile;
