import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import Welcome from "../../components/Welcome/Welcome";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            {/* Header with fade-in animation */}
            <div className={styles.fadeIn}>
                <Header />
            </div>

            {/* Welcome component positioned absolutely */}
            <div className={`${styles.welcomeContainer} ${styles.fadeIn}`}>
                <Welcome />
            </div>

            {/* Hero section with overlay text */}
            <div className={styles.container}>
                <img src="/assets/grandcanyon.jpg" alt="Grand Canyon" className={styles.container}/>
                <div className={styles.overlayText}>
                    <h1>Welcome to Your Adventure with Gov's Outdoors</h1>
                    <p>Start your journey into the beautiful outdoors by learning more about us here</p>
                    <button className={styles.ctaButton}><Link to="/about">Explore Now</Link></button>
                </div>
            </div>
        </>
    );
}

export default Home;

