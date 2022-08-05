import { Link } from "react-router-dom";
import styles from "../styles/gameCard.module.css";

export default function GameCard(props) {
    const genreList = [];
    props.genres.map((g) => {
        genreList.push(g.name);
    });

    return (
        <Link className={styles.link} to={`/${props.id}`}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <img
                        src={props.background_image}
                        className={styles.imagen}
                        alt={props.name}
                    />
                    <div className={styles.contentBx}>
                        <h4>{props.name}</h4>
                        <span>Genres: {genreList.join(", ")}</span>
                        <br />
                        <span>Rating: {props.rating}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
