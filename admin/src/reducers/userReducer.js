import {USER_LOADING, DELETE_USER, GET_USER} from '../actions/types';
const initialState = {
    user: [],
    isLoading: false
}

export default function (state = initialState, action) {
    switch (action.type) {

        case USER_LOADING:
            return {
                ... state,
                isLoading: true
            }
        case GET_USER:
            return {
                ... state,
                user: action.payload
            }
        case DELETE_USER:
            return {
                ... state,
                user: state.user.filter((users) => users.id !== action.payload)
            }
        default:
            return state;
    }
}
