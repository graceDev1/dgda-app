import { GET_FORUM, POST_FORUM, FORUM_LOADING} from './types';
import { tokenConfig } from './authAction';
import { returnErrors } from './errorAction';
import axios from 'axios';



// get forum data
export const getforum = ()=> dispatch=>{

    console.log("getforum")
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

export const forumAdd = ({title, content, author}) => (dispatch, getState) =>{
    const config = {
        headers:{
            'Content-type': 'application/json'
        }
    }

    const body = JSON.stringify({title,content,author});
    axios.post('/api/forum',body,config, tokenConfig(getState))
    .then(data =>{
        dispatch({
            type: POST_FORUM,
            payload: data.data
        })
    })
    .catch(err=> dispatch(returnErrors(err.response.data, err.response.status)));
}


export const setForumLoading = () =>{
    return{
        type: FORUM_LOADING
    }
}