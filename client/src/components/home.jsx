import { getAllGames } from "../redux/actions";
import GameCard from "./gameCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export function Home() {
    //Creo traigo el dispatch y la propiedad allGames del estado global
    const dispatch = useDispatch();
    const { allGames } = useSelector((state) => state);
    console.log(allGames);

    useEffect(() => {
        dispatch(getAllGames());
    }, []);

    return (
        <div>
            {allGames?.map((game) => (
                <div>
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
