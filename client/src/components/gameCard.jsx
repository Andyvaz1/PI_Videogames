import { Link } from "react-router-dom";
import styles from "../styles/gameCard.module.css";

export default function GameCard(props) {
    return (
        <Link to={`/${props.id}`}>
            <div>
                <img
                    src={props.background_image}
                    className={styles.imagen}
                    alt={props.name}
                />
                <span>{props.name}</span>
            </div>
        </Link>
    );
}
