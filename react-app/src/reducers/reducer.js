import {
    FETCHING_ACTIVITY_START,
    FETCHING_ACTIVITY_SUCCESS,
    FETCHING_ACTIVITY_FAILURE
} from '../actions';

const initialState = {
    isLoading: false,
    pokemon: null,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_ACTIVITY_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCHING_ACTIVITY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                pokemon: action.payload
            };
        default:
            return state;
    }
}
export default reducer;