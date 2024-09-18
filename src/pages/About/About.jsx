import styles from "./about.module.css";
import Header from "../../components/Header/Header";
import GoogleMapComponent from "../../components/googleMap/GoogleMap";

function About(){
    return(
        <>
        <Header />
        <h1 className={styles.h1}>we could do this like the about page and FAQ page or we could put those on separate pages idk</h1>
        <GoogleMapComponent />
        </>
    );
}

export default About;