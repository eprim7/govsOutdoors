import styles from './Register.module.css';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';

function Register(){
    return(
        
        <>
            <Header />
            <body className={styles.body}>
                <h1 className={styles.h1}>Register</h1>
                <div className={styles.container}>
                    <form action="POST" > 
                        <label htmlFor="username" className={styles.label}><b>Username:</b></label>
                        <input type="text" id="username" className={styles.input} placeholder="Username"/>
                        <br />
                        <label htmlFor="password" className={styles.label}><b>Password:</b></label>
                        <input type="password" id="password" className={styles.input} placeholder="Password"/>
                        <label htmlFor="password" className={styles.label}><b>Password:</b></label>
                        <input type="password" id="password" className={styles.input} placeholder="Re-type Password"/>
                    </form>
                    <button className={styles.button}>Register</button>
                </div>
                <div className={styles.bottom}>
                    <h3 className={styles.h3}>Already Have an Account <Link to="/Login"><span className={styles.span}>Sign in Here</span></Link> </h3>
                </div>
            </body>
        
        </>

    );
}

export default Register;