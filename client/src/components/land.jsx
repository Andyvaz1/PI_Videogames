import { Link } from "react-router-dom";
import styles from "../styles/land.module.css";
import video from "../styles/videos/video.mp4";
import video2 from "../styles/videos/video2.mp4";
import video3 from "../styles/videos/video3.mp4";
import video4 from "../styles/videos/video4.mp4";
import video5 from "../styles/videos/video5.mp4";
import video6 from "../styles/videos/video6.mp4";
import video7 from "../styles/videos/video7.mp4";
import video8 from "../styles/videos/video8.mp4";
import video9 from "../styles/videos/video9.mp4";
import logo from "../styles/goLand.png";

export function Land() {
    return (
        <div className={styles.section}>
            <h1 className={styles.sectionLink}>
                <Link to="/home" className={styles.link}>
                    <span>🔮</span>
                    <img src={logo} className={styles.img} />
                    <span>🔮</span>
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
