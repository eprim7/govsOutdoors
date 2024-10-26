import React, { useState } from "react";
import Header from "../../components/Header/Header";
import styles from './Login.module.css';
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

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
            console.log(result);

            if (result.status === 'success') {
                // Redirect to home page on successful login
                navigate('/');
            } else {
                setError(result.message); // Set error message to state for display
            }
        } catch (error) {
            console.error("Error logging in:", error);
            setError("Login failed. Please try again."); // Generic error message
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
                        <label htmlFor="username" className={styles.label}><b>Username:</b></label>
                        <input 
                            type="text" 
                            id="username" 
                            className={styles.input} 
                            placeholder="Username"
                            value={username} // Bind value to state
                            onChange={(e) => setUsername(e.target.value)} // Update state on change
                        />
                        <br />
                        <label htmlFor="password" className={styles.label}><b>Password:</b></label>
                        <input 
                            type="password" 
                            id="password" 
                            className={styles.input} 
                            placeholder="Password"
                            value={password} // Bind value to state
                            onChange={(e) => setPassword(e.target.value)} // Update state on change
                        />
                        <button type="button" onClick={seePassword} className={styles.display}>See Password</button>
                        <button type="submit" className={styles.button}>Login</button>
                        {error && <p className={styles.error}>{error}</p>} {/* Show error message if any */}
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
