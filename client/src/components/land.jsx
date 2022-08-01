import { Link } from "react-router-dom";
import styles from "./land.module.css";
export function Land() {
    return (
        <div>
            <></>
            <Link to="/home" className={styles.entrar}>
                ENTRAR
            </Link>
        </div>
    );
}
