import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
// This is gonna display a welcome message with the username the user inputs
// import Welcome from "../../components/Welcome/Welcome";

function Home() {
    return (
        <>
            <Header />
            <div className={styles.container}>
            </div>
        </>
    );
}

export default Home;