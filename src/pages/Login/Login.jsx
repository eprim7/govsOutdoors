import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import styles from './Login.module.css';
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    // Check localStorage on component mount to set initial login state
    useEffect(() => {
        const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(loggedInStatus);
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const response = await fetch("http://localhost/login_users.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();

            if (result.status === 'success') {
                setIsLoggedIn(true);
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("userEmail", username);
                localStorage.setItem("justLoggedIn", "true"); // Set directly after login
                navigate('/');
                setTimeout(() => localStorage.removeItem("justLoggedIn"), 1000); // Remove shortly after navigating
            } else {
                setError(result.message);
            }
        } catch (error) {
            console.error("Error logging in:", error);
            setError("Login failed. Please try again.");
        }
    };

    const seePassword = () => {
        const passwordField = document.getElementById("password");
        if (passwordField.type === "password") {
            passwordField.type = "text"; // Show password
        } else {
            passwordField.type = "password"; // Hide password
        }
    };
    
    return (
        <>
            <Header />
            <body className={styles.body}>
                <h1 className={styles.h1}>Login</h1>
                <div className={styles.container}>
                    <form onSubmit={handleLogin}>
                        <label htmlFor="username" className={styles.label}><b>Email:</b></label>
                        <input 
                            type="text" 
                            id="username" 
                            className={styles.input} 
                            placeholder="Email"
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <br />
                        <label htmlFor="password" className={styles.label}><b>Password:</b></label>
                        <input 
                            type="password" 
                            id="password" 
                            className={styles.input} 
                            placeholder="Password"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="button" onClick={seePassword} className={styles.display}>See Password</button>
                        <button type="submit" className={styles.button}>Login</button>
                        {error && <p className={styles.error}>{error}</p>}
                    </form>
                </div>
                <div>
                    <h3 className={styles.h3}>Don't have an account? <Link to="/register"><span className={styles.span}>Register Here</span></Link> </h3>
                </div>
            </body>
        </>
    );
}

export default Login;

