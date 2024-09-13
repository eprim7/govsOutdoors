import styles from "./about.module.css";
import Header from "../../components/Header/Header";

function About(){
    return(
        <>
        <Header />
        <h1 className={styles.h1}>we could do this like the about page and FAQ page or we could put those on separate pages idk</h1>
        </>
    );
}

export default About;