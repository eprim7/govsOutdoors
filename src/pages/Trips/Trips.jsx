import Header from "../../components/Header/Header";
import styles from './Trips.module.css';

function Trips() {
    return (
        <>
            <Header />
            <h1 className={styles.header}>Future Trips</h1>

            <div className={styles.rowcontainer}>
                {/* row 1 */}
                <div className={styles.row}>
                    <div className={styles.labelandexplanation}>
                        <div className={styles.label}>Foster Falls</div>
                        <br />
                        <div className={styles.explanation}>
                            In this Govs Outdoors adventure, we will travel to one of the premier climbing areas near Clarksville.
                            Jackson Falls provides high quality, accessible climbing in a beautiful location. Govs Outdoors provides all the gear, setup and
                            climbing coaching while on-site!
                            <ul>
                                <li><strong>Date:</strong> 11/2 - 11/3/2024</li>
                                <li><strong>Place:</strong> Jackson Falls</li>
                                <li><strong>Price:</strong> $65</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.imgagecontainer}>
                        <img className={styles.image} src="/assets/rockClimbing.png" alt="Foster Falls Trip" />
                    </div>
                </div>

                {/* row 2 */}
                <div className={styles.row}>
                    <div className={styles.labelandexplanation}>
                        <div className={styles.label}>Smoky Mountains Backpacking Trip</div>
                        <br />
                        <div className={styles.explanation}>
                            Witness the natural beauty of the Great Smoky Mountains in a whole new way!
                            In this backpacking adventure, Govs Outdoors will lead you on a 3-day trek through the Smokies. Vistas, meadows
                            and mountains await. This is a suitable trip for anyone, including those who are new to backpacking.
                            <ul>
                                <li><strong>Date:</strong> 10/11 - 10/14/2024</li>
                                <li><strong>Place:</strong> Smoky Mountains</li>
                                <li><strong>Price:</strong> $150</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.imgagecontainer}>
                        <img className={styles.image} src="/assets/smokiesTrip.jpg" alt="Smokies trip" />
                    </div>
                </div>

                {/* row 3 */}
                <div className={styles.row}>
                    <div className={styles.labelandexplanation}>
                        <div className={styles.label}>Grand Canyon Trip</div>
                        <br />
                        <div className={styles.explanation}>
                            Have you always wanted to witness the beauty of the Grand Canyon? Wanting an adventure over spring break? 
                            Come with us on our trip to the Grand Canyon, as we will hike through and see nature's true beauty
                            <ul>
                                <li><strong>Date:</strong> 3/10/25 - 3/14/25</li>
                                <li><strong>Place:</strong> Grand Canyon National Park, Arizona</li>
                                <li><strong>Price:</strong> $400</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.imgagecontainer}>
                        <img className={styles.image} src="/assets/grandcanyon.jpg" alt="grand canyon" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Trips;
