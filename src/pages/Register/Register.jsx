import React, { useState } from 'react';
import styles from './Register.module.css';
import Header from '../../components/Header/Header';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isValid, setIsValid] = useState(true); // Default to true
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault(); // Prevent default form submission

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
        const isPasswordValid = regex.test(password);
        setIsValid(isPasswordValid); // Check password validity

        const resetForm = () => {
            setUsername(''); // clears username
            setPassword(''); // clears password 
            setConfirmPassword(''); // clears confirm password 
            setError(''); // Clear error message
        }

        // CHECKS VALIDITY OF LOGGING IN 
        if (username.trim() === '') {
            setError("Username is required."); // Set error for empty username
            return; // Exit the function early
        }
        if (!isPasswordValid) {
            setError("Password must be eight characters and contain an uppercase letter, a number, and a special character"); // Set error for invalid password
            return; // Exit the function early
        }
        if(password !== confirmPassword){
            setError("Passwords do not match");
            return;
        }

        // CONNECT TO THE BACKEND
        try {
            const response = await fetch("http://localhost/register_users.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            const result = await response.json(); // Parse JSON response

            if (!response.ok || result.status !== 'success') {
                setError(result.message || "Registration failed. Please try again."); // Use message from the response
                return;
            }

            // Successful registration
            // Store the user's logged-in status and email in localStorage
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userEmail", username); // You can use the username or email, whichever is applicable
            localStorage.setItem("justLoggedIn", "true"); // Set this to trigger the welcome message
            
            navigate('/'); // Redirect user to home page
            resetForm();
            
        } catch (error) {
            setError("Registration failed. Please try again."); // Fallback error message
            console.error("Error registering user:", error);
        }
    };

    const togglePasswordVisibility = (id) => {
        const passwordField = document.getElementById(id);
        passwordField.type = passwordField.type === "password" ? "text" : "password"; // Toggle visibility
    };

    return (
        <>
            <Header />
            <div className={styles.body}>
                <h1 className={styles.h1}>Register</h1>
                <div className={styles.container}>
                    <form onSubmit={handleRegister}> 
                        <label htmlFor="username" className={styles.label}><b>Username:</b></label>
                        <input 
                            type="text" 
                            id="username" 
                            className={styles.input} 
                            placeholder="Username" 
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
                        <button type="button" onClick={() => togglePasswordVisibility("password")}  className={styles.display}>See Password</button>
                        <label htmlFor="confirm-password" className={styles.label}><b>Re-type Password:</b></label>
                        <input 
                            type="password" 
                            id="confirm-password" 
                            className={styles.input} 
                            placeholder="Re-type Password" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                        />
                        <button type="button" onClick={() => togglePasswordVisibility("confirm-password")} className={styles.display}>See Password</button>
                        <button type="submit" className={styles.button}>Register</button>
                        {error && <p className={styles.error}>{error}</p>} {/* Show error message if any */}
                    </form>
                </div>
                <div className={styles.bottom}>
                    <h3 className={styles.h3}>Already Have an Account <Link to="/Login"><span className={styles.span}>Sign in Here</span></Link></h3>
                </div>
            </div>
        </>
    );
}

export default Register;



