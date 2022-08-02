import { GET_ALL_GAMES, GET_GAME_DETAIL } from "./actions";

const initialState = {
    allGames: [],
    gameDetail: {},
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_GAMES:
            return {
                ...state,
                allGames: action.payload,
            };
        case GET_GAME_DETAIL:
            return {
                ...state,
                gameDetail: action.payload,
            };
        default: {
            return {
                ...state,
            };
        }
    }
};
