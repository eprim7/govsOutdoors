import styles from "./about.module.css";
import Header from "../../components/Header/Header";

function About(){
    return(
        <>
        <Header />

        <img src="/assets/snow.jpg" alt="snow" className={styles.image}></img>
        <div className={styles.container}>
            <br />
            <h1 className={styles.h1}>About Gov's Outdoors</h1>
            <div className={styles.descriptionDiv}>
            <h2 className={styles.h2}>
                Gov's Outdoors has been a part of Austin Peay State University for 15 years. 
                We are a community of outdoor enthusiasts who love exploring the great outdoors, 
                embarking on adventures, and fostering a love for nature. Whether you're a seasoned 
                adventurer or just looking to try something new, Gov's Outdoors offers a welcoming 
                environment for all experience levels.
            </h2>
            </div>
        </div>

        <div className={styles.wrapper}>
            <div className={styles.card}>
                <h1 className={styles.h1}>Find Us Here</h1>
                <iframe className={styles.iframe}
                        title="map of foy fitness center in Clarksville, Tn"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25618.3174045536!2d-87.3566236!3d36.535758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864d9b317de7549%3A0x57bb19d663c4c01c!2sFoy%20Fitness%20and%20Recreation%20Center!5e0!3m2!1sen!2sus!4v1695472438511!5m2!1sen!2sus" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className={styles.card}>
            <h1 className={styles.h1}>Contact Us Here</h1>
                <div className={styles.filler}>
                    <br />
                    <h3 className={styles.h3}>Phone Number: (931) 221-6976</h3>
                    <br />
                    <h3 className={styles.h3}>Email: murchisonm@apsu.edu</h3>
                    <br />
                    <h3 className={styles.h3}>Address: 451 Marion St, Clarksville, TN 37040</h3>
                </div>
            </div>
            <div className={styles.card}>
            <h1 className={styles.h1}>Hours Of Operation</h1>
                <div className={styles.filler}>
                    <br />
                    <h3 className={styles.h3}>Monday-Friday: 6:00a - 9:00p</h3>
                    <br />
                    <h3 className={styles.h3}>Saturday: 9:00a - 5:00p</h3>
                    <br />
                    <h3 className={styles.h3}>Sunday: 12:00p - 9:00p</h3>
                </div>
            </div>

            </div>
       </>
    );
}

export default About;