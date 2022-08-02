import { Link } from "react-router-dom";
import styles from "../styles/land.module.css";
import video from "../styles/video.mp4";

export function Land() {
    return (
        <div className={styles.section}>
            <h1 className={styles.sectionLink}>
                <Link to="/home" className={styles.link}>
                    Enter to The Game Oracle
                </Link>
            </h1>

            <div className={styles.videoContainer}>
                <div className={styles.videoOverlay}></div>
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </div>
    );
}
