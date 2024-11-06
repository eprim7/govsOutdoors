import { Link } from "react-router-dom";
import styles from './SuccessfulPayment.module.css';

function SuccessfulPayment() {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.h1}>
                Thank you for shopping with us
            </h1>
            <Link to="/" className={styles.link}>
                Navigate back home
            </Link>
        </div>
    );
}

export default SuccessfulPayment;
