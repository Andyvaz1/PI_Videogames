import { Link } from "react-router-dom";
import styles from "../styles/navBar.module.css";
import homeIcon from "../styles/homeIcon2.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllGames } from "../redux/actions";
export function NavBar() {
    const dispatch = useDispatch();

    return (
        <header className={styles.header}>
            <div>
                <button
                    className={styles.raise2}
                    onClick={dispatch(getAllGames())}
                >
                    <Link to="/home" className={styles.link}>
                        <img src={homeIcon} />
                    </Link>
                </button>
            </div>
            <div>
                <Link to="/home" className={styles.link}>
                    <h1 className={styles.h1}>The Game Oracle</h1>
                </Link>
            </div>
            <div>
                <button className={styles.raise}>
                    <Link to="/creategame" className={styles.link}>
                        + Add Game
                    </Link>
                </button>
            </div>
        </header>
    );
}
