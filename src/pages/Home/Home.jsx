import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import homePicture from '../../assets/homePicture.png';

function Home(){
    return(
        <>
        <h1 className={styles.h1}>Gov's Outdoors Home Page</h1>
        <p><Link to="about">About</Link></p>
        <img style={{ height: '70%', width: '100%' }} src={homePicture} alt="home page pic" />
        </>
    );
}

export default Home;