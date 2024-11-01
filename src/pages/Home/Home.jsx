import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import Welcome from "../../components/Welcome/Welcome"; // Make sure this path is correct

function Home() {
    return (
        <>
            <Header />
            <div className={styles.welcomeContainer}>
                <Welcome />
            </div>
            <img src="/assets/grandcanyon.jpg" alt="grand canyon" className={styles.container}></img>
            
        </>
    );
}

export default Home;
