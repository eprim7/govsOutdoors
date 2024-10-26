import { Link } from "react-router-dom";
import styles from './404.module.css';

function PageNotFound(){
    return(
        <div className={styles.pageContainer}>
            <h1 className={styles.h1}>
              Oops. This page was not found. Click on the button to go back home
            </h1>
            <Link to="/" className={styles.link}>
              Home
            </Link>
        </div>
    )
}

export default PageNotFound;