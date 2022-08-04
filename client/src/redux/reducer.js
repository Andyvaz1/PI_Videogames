import {
    GET_ALL_GAMES,
    GET_GAME_DETAIL,
    GET_ALL_GENRES,
    SET_PAGE,
    NEXT_PAGE,
    PREV_PAGE,
} from "./actions";

//////////Estado inicial //////////
const initialState = {
    allGames: [],
    gameDetail: {},
    currentPage: 1,
    allGenres: [],
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
        case GET_ALL_GENRES:
            return {
                ...state,
                allGenres: action.payload,
            };

        case SET_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };

        case NEXT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1,
            };
        case PREV_PAGE:
            return {
                ...state,
                currentPage: state.currentPage - 1,
            };

        default: {
            return {
                ...state,
            };
        }
    }
};
