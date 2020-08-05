import {GET_FORUM, DELETE_FORUM, LOADING_FORUM} from '../actions/types';

const initialState = {
    forum: [],
    isLoading: false
}


export default function (state = initialState, action) {

    switch (action.type) {
        case LOADING_FORUM:
            return {
                ... state,
                isLoading: true
            }
        case GET_FORUM:
            return {
                ... state,
                forum: action.payload
            }
        case DELETE_FORUM:
            return {
                ... state,
                forum: state.forum.filter(forums => forums.id !== action.payload)
            }
        default:
            return state;
    }
}
