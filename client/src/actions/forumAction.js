import { GET_FORUM, POST_FORUM, FORUM_LOADING} from './types';
import { tokenConfig } from './authAction';
import { returnErrors } from './errorAction';
import axios from 'axios';



// get forum data
export const getforum = ()=> dispatch=>{
 
    dispatch(setForumLoading());
   axios.get('/api/forum')
   .then(data=>{
       dispatch({
           type:GET_FORUM,
           payload: data.data
       })
   })
    .catch(err =>console.log(err));
}

// post forum 

export const forumAdd = (forum) => (dispatch, getState) =>{
    axios.post('/api/forum', forum, tokenConfig(getState))
    .then(res =>{
        dispatch({
            type: POST_FORUM,
            payload: res.data
        })
    })
    .catch(err=> dispatch(returnErrors(err.response.data, err.response.status)));
}


export const setForumLoading = () =>{
    return{
        type: FORUM_LOADING
    }
}