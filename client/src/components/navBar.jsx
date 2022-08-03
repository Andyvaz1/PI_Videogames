import { Link } from "react-router-dom";
import styles from "../styles/navBar.module.css";
import homeIcon from "../styles/homeIcon2.png";
import oracleLogo from "../styles/oraclename.png";
import oracleLogo2 from "../styles/oracleNameVioleta.png";
import oracleLogo3 from "../styles/go3.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllGames } from "../redux/actions";
export function NavBar() {
    const dispatch = useDispatch();

    return (
        <header className={styles.header}>
            <div>
                <Link to="/home" className={styles.link}>
                    <button
                        className={styles.raise2}
                        onClick={dispatch(getAllGames())}
                    >
                        <img src={homeIcon} alt="Home" />
                    </button>
                </Link>
            </div>
            <div>
                <Link to="/home" className={styles.link}>
                    <h1 className={styles.h1}>
                        <Link to="/home" className={styles.linkLogo}>
                            <img src={oracleLogo3} alt="The Game Oracle" />
                        </Link>
                        <span className={styles.span}>🔮</span>
                    </h1>
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
