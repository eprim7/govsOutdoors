import styles from "./Home.module.css";
import Header from "../../components/Header/Header";

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