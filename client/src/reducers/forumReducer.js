import { GET_FORUM, POST_FORUM, FORUM_LOADING} from '../actions/types';

const initialState = {
    forum: [],
    loading: false
}

export default function(state=initialState, action){

    // action include type
    switch(action.type){

        case GET_FORUM:
            console.log("action",action.payload)
            return{
                ...state,
                forum: action.payload,
                loading:false
            };
        case POST_FORUM:
            return{
                ...state,
                forum: [action.payload, ...state.forum]
            };
        case FORUM_LOADING:
            return{
                ...state,
                loading: true
            }
        default:
            return state;
    }
}