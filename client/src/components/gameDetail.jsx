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
    return (
        <div className={styles.fondo}>
            <h1>{gameDetail.name}</h1>
            <img
                src={gameDetail.background_image}
                className={styles.img}
                alt="gamePhoto"
            />

            <p>Description: {gameDetail.description}</p>
            <p>Release Date: {gameDetail.released}</p>
            <p>Rating: {gameDetail.rating}</p>
        </div>
    );
}
