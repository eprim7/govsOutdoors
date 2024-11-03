import Header from "../../components/Header/Header";
import styles from './Events.module.css';

function Events(){

    return(

        <>
        <Header />
        <h1 className={styles.header}>Future Events</h1>

        <div className={styles.rowcontainer}>
        {/* row 1 */}
        <div className={styles.row}>
            <div className={styles.labelandexplanation}>
                <div className={styles.label}>Jump Scare Dyno Competition</div>
                <br></br>
                <div className={styles.explanation}>We are bringing back our spookyween climbing event for another year! 
                    This Halloween, join us at the Rock from 2 - 6 PM in your best costume and show off your rock-hopping skills!
                     A 'dyno' is a jumping move in rock climbing, so this competition will be based on single-move challenges involving
                      jumping from one hold to another. We will have dynos of all difficulty levels. 
                    <ul>
                        <li><strong>Date:</strong> January 15, 2024</li>
                        <li><strong>Place:</strong> New York City</li>
                        <li><strong>Other:</strong> Exclusive event for VIP members</li>
                    </ul>
                </div>

            </div>
            <div className={styles.imgagecontainer}>
                <img src="https://via.placeholder.com/550" alt="Image 1"></img>
            </div>
        </div>

        {/* row 2 */}
        <div className={styles.row}>
            <div className={styles.labelandexplanation}>
                <div className={styles.label}>Love Handles</div>
                <br></br>
                <div className={styles.explanation}>This is the description for the second image. It provides more details about the subject matter of the image.
                <ul>
                        <li><strong>Date:</strong> January 15, 2024</li>
                        <li><strong>Place:</strong> New York City</li>
                        <li><strong>Other:</strong> Exclusive event for VIP members</li>
                    </ul>
                </div>
                
            </div>
            <div className={styles.imgagecontainer}>
                <img src="https://via.placeholder.com/550" alt="Image 2"></img>
            </div>
        </div>

        {/* row 3 */}
        <div className={styles.row}>
            <div className={styles.labelandexplanation}>
                <div className={styles.label}>Bouldering Competition</div>
                <br></br>
                <div className={styles.explanation}>This is the description for the third image. It gives context to what the image is illustrating.
                <ul>
                        <li><strong>Date:</strong> January 15, 2024</li>
                        <li><strong>Place:</strong> New York City</li>
                        <li><strong>Other:</strong> Exclusive event for VIP members</li>
                    </ul>
                </div>
            </div>
            <div className={styles.imgagecontainer}>
                <img src="https://via.placeholder.com/550" alt="Image 3"></img>
            </div>
        </div>
    </div>


        </>
    );
}

export default Events;