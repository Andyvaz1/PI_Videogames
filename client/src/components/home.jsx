import { getAllGames } from "../redux/actions";
import GameCard from "./gameCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styles from "../styles/home.module.css";

export function Home() {
    //Creo traigo el dispatch y la propiedad allGames del estado global
    const dispatch = useDispatch();
    const { allGames } = useSelector((state) => state);

    useEffect(() => {
        dispatch(getAllGames());
    }, []);

    return (
        <div className={styles.grid}>
            {allGames?.map((game) => (
                <div key={game.id}>
                    <GameCard
                        background_image={game.background_image}
                        name={game.name}
                        id={game.id}
                    />
                </div>
            ))}
        </div>
    );
}
/// Crear Store
/// Crear actions
/// crear reducer
