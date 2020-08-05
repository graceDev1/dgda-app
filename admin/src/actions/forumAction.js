import {GET_FORUM, DELETE_FORUM, LOADING_FORUM} from './types';
import {returnErrors} from './errorAction';
import {tokenConfig} from './authAction';
import axios from 'axios';


export const getForum = () => dispatch => {
    dispatch({type: LOADING_FORUM});

    axios.get('/api/forum').then(res => {
        dispatch({type: GET_FORUM, payload: res.data})
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status))
    });
}


export const removeForum = (id) => (dispatch, getState) => {

    axios.delete(`/api/forum/${id}`, tokenConfig(getState)).then(res => {
        dispatch({type: DELETE_FORUM, payload: id})
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}
