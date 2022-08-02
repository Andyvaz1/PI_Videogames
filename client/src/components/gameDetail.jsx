import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGameDetail } from "../redux/actions";

export function GameDetail(props) {
    const dispatch = useDispatch();
    const { gameDetail } = useSelector((state) => state);
    const id = props.match.params.id;

    useEffect(() => {
        dispatch(getGameDetail(id));
    }, []);
    return (
        <div>
            <h1>{gameDetail.name}</h1>
            <img src={gameDetail.background_image} />
            <p>Generes : {gameDetail.genres}</p>
            <p>Descripton: </p>
        </div>
    );
}
