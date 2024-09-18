import Header from "../../components/Header/Header";
import styles from './Trips.module.css';

function Trips(){

    return(

        <>
        <Header />
       


        <h1>Columns of Divs with Picture, Label, and Explanation</h1>

        <br></br>


    {/* row 1  */}
    <div className={styles.row}>
        
        {/* colum 1 */}
        <div className={styles.column}>
            <img src="https://via.placeholder.com/300" alt="Image 1"></img>
            <div className={styles.label}>Label 1</div>
            <div className={styles.explanation}>This is an explanation for the first image. It provides more information about the image and its context.</div>
            <br></br>
            <a href="#" className={styles.learnmore}>Learn More</a>
        </div>

        {/* column 2 */}
        <div className={styles.column}>
            <img src="https://via.placeholder.com/300" alt="Image 2"></img>
            <div className={styles.label}>Label 2</div>
            <div className={styles.explanation}>This is an explanation for the second image. It provides more information about the image and its context.</div>
            <br></br>
            <a href="#" className={styles.learnmore}>Learn More</a>
        </div>

        {/* column 3  */}
        <div className={styles.column}>
            <img src="https://via.placeholder.com/300" alt="Image 3"></img>
            <div className={styles.label}>Label 3</div>
            <div className={styles.explanation}>This is an explanation for the third image. It provides more information about the image and its context.</div>
            <br></br>
            <a href="#" className={styles.learnmore}>Learn More</a>
        </div>

        
        
    </div>


{/* row 2  */}
    <div className={styles.row}>
        
       {/* colum 1 */}
       <div className={styles.column}>
            <img src="https://via.placeholder.com/300" alt="Image 1"></img>
            <div className={styles.label}>Label 1</div>
            <div className={styles.explanation}>This is an explanation for the first image. It provides more information about the image and its context.</div>
            <br></br>
            <a href="#" className={styles.learnmore}>Learn More</a>
        </div>

        {/* column 2 */}
        <div className={styles.column}>
            <img src="https://via.placeholder.com/300" alt="Image 2"></img>
            <div className={styles.label}>Label 2</div>
            <div className={styles.explanation}>This is an explanation for the second image. It provides more information about the image and its context.</div>
            <br></br>
            <a href="#" className={styles.learnmore}>Learn More</a>
        </div>

        {/* column 3  */}
        <div className={styles.column}>
            <img src="https://via.placeholder.com/300" alt="Image 3"></img>
            <div className={styles.label}>Label 3</div>
            <div className={styles.explanation}>This is an explanation for the third image. It provides more information about the image and its context.</div>
            <br></br>
            <a href="#" className={styles.learnmore}>Learn More</a>
        </div>
        
    </div>


{/* row 3  */}
    <div className={styles.row}>
        
        {/* colum 1 */}
        <div className={styles.column}>
            <img src="https://via.placeholder.com/300" alt="Image 1"></img>
            <div className={styles.label}>Label 1</div>
            <div className={styles.explanation}>This is an explanation for the first image. It provides more information about the image and its context.</div>
            <br></br>
            <a href="#" className={styles.learnmore}>Learn More</a>
        </div>

        {/* column 2 */}
        <div className={styles.column}>
            <img src="https://via.placeholder.com/300" alt="Image 2"></img>
            <div className={styles.label}>Label 2</div>
            <div className={styles.explanation}>This is an explanation for the second image. It provides more information about the image and its context.</div>
            <br></br>
            <a href="#" className={styles.learnmore}>Learn More</a>
        </div>

        {/* column 3  */}
        <div className={styles.column}>
            <img src="https://via.placeholder.com/300" alt="Image 3"></img>
            <div className={styles.label}>Label 3</div>
            <div className={styles.explanation}>This is an explanation for the third image. It provides more information about the image and its context.</div>
            <br></br>
            <a href="#" className={styles.learnmore}>Learn More</a>
        </div>
        
    </div>


{/* row 4 */}
    <div className={styles.row}>
        
       {/* colum 1 */}
       <div className={styles.column}>
            <img src="https://via.placeholder.com/300" alt="Image 1"></img>
            <div className={styles.label}>Label 1</div>
            <div className={styles.explanation}>This is an explanation for the first image. It provides more information about the image and its context.</div>
            <br></br>
            <a href="#" className={styles.learnmore}>Learn More</a>
        </div>

        {/* column 2 */}
        <div className={styles.column}>
            <img src="https://via.placeholder.com/300" alt="Image 2"></img>
            <div className={styles.label}>Label 2</div>
            <div className={styles.explanation}>This is an explanation for the second image. It provides more information about the image and its context.</div>
            <br></br>
            <a href="#" className={styles.learnmore}>Learn More</a>
        </div>

        {/* column 3  */}
        <div className={styles.column}>
            <img src="https://via.placeholder.com/300" alt="Image 3"></img>
            <div className={styles.label}>Label 3</div>
            <div className={styles.explanation}>This is an explanation for the third image. It provides more information about the image and its context.</div>
            <br></br>
            <a href="#" className={styles.learnmore}>Learn More</a>
        </div>
       
    </div>


        </>
    );
}

export default Trips;