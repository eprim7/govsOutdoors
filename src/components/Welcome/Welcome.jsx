// Welcome.jsx
import React, { useEffect, useState } from "react";

function Welcome() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
        const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
        const storedEmail = localStorage.getItem("userEmail");

        setIsLoggedIn(loggedInStatus);
        setUserEmail(storedEmail || "");

    }, []);

    return (
        <>
            {isLoggedIn && <div>Welcome, {userEmail}</div>}
        </>
    );
}

export default Welcome;
