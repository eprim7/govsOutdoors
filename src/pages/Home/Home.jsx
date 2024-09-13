import styles from "./Home.module.css";
import homePicture from '../../assets/homePicture.png';
import Header from "../../components/Header/Header";

function Home(){
    return(
        <>
        <Header />
        <div className={styles.container}>
            <img className={styles.img} src={homePicture} alt="home page pic" />
        </div>  
        
         </>
    );
}

export default Home;