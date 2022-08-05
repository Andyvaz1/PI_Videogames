import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGameDetail } from "../redux/actions";
import { useParams } from "react-router-dom";
import styles from "../styles/gameDetail.module.css";

export function GameDetail(props) {
    const dispatch = useDispatch();
    const { gameDetail } = useSelector((state) => state);
    const params = useParams();
    useEffect(() => {
        const id = params.id;
        dispatch(getGameDetail(id));
    }, []);
    console.log(gameDetail.platforms);

    return (
        <div className={styles.fondo}>
            <h1>{gameDetail.name}</h1>
            <br />
            <img
                src={gameDetail.background_image}
                className={styles.img}
                alt="gamePhoto"
            />

            <p>Description: {gameDetail.description}</p>
            <p>Release Date: {gameDetail.released}</p>
            <div className={styles.generos}>
                <p>Rating: {gameDetail.rating}</p>
            </div>
            <div className={styles.generos}>
                <span>Genres: </span>
                {gameDetail.genres?.map((p, i) => (
                    <span key={i}> {p} </span>
                ))}
            </div>
            <div className={styles.generos}>
                <span>Platforms: </span>
                {gameDetail.platforms?.map((p, i) => (
                    <span key={i}> {p} </span>
                ))}
            </div>
        </div>
    );
}
/*
<p>Platforms: {platformsList.join(", ")}</p>
console.log(gameDetail);

    const platformsList = [];
    gameDetail.platforms.platform.map((p) => {
        platformsList.push(p.platform);
    });*/
