import { TEXT_LOADING, GET_TEXT } from '../actions/types';


const initialState = {
    text : [],
    loading: false
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_TEXT:
            return{
                ...state,
                text: action.payload,
                loading: false
            }
        case TEXT_LOADING:
            return{
                ...state,
                loading: true
            }
        default:
            return state;
    }
}