import { Link } from "react-router-dom";
import styles from "../styles/land.module.css";
import video from "../styles/videos/video.mp4";

import logo from "../styles/imagenes/goLand.png";

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
