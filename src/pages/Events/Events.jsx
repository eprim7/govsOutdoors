import Header from "../../components/Header/Header";
import styles from './Events.module.css';

function Events(){

    return(

        <>
        <Header />
       


        <h1>Rows with Image on Right and Text on Left</h1>

        <div className={styles.rowcontainer}>
        {/* row 1 */}
        <div className={styles.row}>
            <div className={styles.labelandexplanation}>
                <div className={styles.label}>Jump Scare Dyno Competition</div>
                <br></br>
                <div className={styles.explanation}>This is the description for the first image. It provides more information about the content displayed in the image. this is for the 
                    events so blah and talk about climbing.  this event in particular is the jump scare dyno competition.  they shouldnt need a link to more info since you do not have 
                    to sign up for events just show up.  these are just informational.  
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
                <div className={styles.label}>Label 2</div>
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
                <div className={styles.label}>Label 3</div>
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