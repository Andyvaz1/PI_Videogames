import {
    GET_ALL_GAMES,
    GET_GAME_DETAIL,
    SET_PAGE,
    NEXT_PAGE,
    PREV_PAGE,
} from "./actions";

//////////Estado inicial //////////
const initialState = {
    allGames: [],
    gameDetail: {},
    currentPage: 1,
};

/////////////////////Reducer /////////////
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

        case SET_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };

        case NEXT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage++,
            };
        case PREV_PAGE:
            return {
                ...state,
                currentPage: state.currentPage--,
            };

        default: {
            return {
                ...state,
            };
        }
    }
};
