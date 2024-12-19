import Header from "../../components/Header/Header";
import React, { useEffect, useState } from "react";

function Profile(){

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
        const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
        const storedEmail = localStorage.getItem("userEmail");

        setIsLoggedIn(loggedInStatus);
        setUserEmail(storedEmail || "");
        if(isLoggedIn) {
            <h1>Username {userEmail}</h1>
        }
        else {
            <h1>Please Log in to get access to this page</h1>
        }
    }, [isLoggedIn, userEmail]);

    return(
        <>
        
        <Header />
        <div>
            {isLoggedIn ? (
                <>
                <h1>Username: {userEmail}</h1>
                <h2>Items Checked Out</h2>
                </>
            ) : (
                <h1>Please Log in to get access to this page</h1>
            )}
        </div>
        
        </>
    );
}

export default Profile;