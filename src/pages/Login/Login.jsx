import Header from "../../components/Header/Header";
import styles from './Login.module.css';
import { Link } from "react-router-dom";

function Profile() {

    return(

        <>
            <Header />
            <body className={styles.body}>
                <h1 className={styles.h1}>Login</h1>
                <div className={styles.container}>
                    <form action="POST" > 
                        <label htmlFor="username" className={styles.label}><b>Username:</b></label>
                        <input type="text" id="username" className={styles.input} placeholder="Username"/>
                        <br />
                        <label htmlFor="password" className={styles.label}><b>Password:</b></label>
                        <input type="password" id="password" className={styles.input} placeholder="Password"/>
                    </form>
                    <button className={styles.button}>Login</button>
                </div>
                <div>
                    <h3 className={styles.h3}>Don't have an account? <Link to="/register"><span className={styles.span}>Register Here</span></Link> </h3>
                </div>
            </body>
        </>

    );
}

export default Profile;