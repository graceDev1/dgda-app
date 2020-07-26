import { TEXT_LOADING, GET_TEXT} from './types';
import { returnErrors } from './errorAction';
import axios from 'axios';

export const getText = () => dispatch => {
    dispatch({type: TEXT_LOADING});
    axios.get('/api/post')
    .then(res =>{
        dispatch({
            type: GET_TEXT,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch(returnErrors(err,err))
    })
}