import {
    GET_TEXT,
    ADD_TEXT,
    DELETE_TEXT,
    UPDATE_TEXT,
    TEXT_LOADING
} from '../actions/types';

const initialState = {
    text: [],
    loading: false,
    texte: {}

}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TEXT:
            return {
                ... state,
                text: action.payload,
                loading: false
            }
        case ADD_TEXT:
            return {
                ... state,
                text: [
                    action.payload,
                    ... state.text
                ]
            }
        case DELETE_TEXT:
            return {
                ... state,
                text: state.text.filter(texte => texte.id !== action.payload)
            }
        case TEXT_LOADING:
            return {
                ... state,
                loading: true
            }
        case UPDATE_TEXT:
            return {
                ... state,
                texte: action.payload
            }
        default:
            return state;
    }
}
