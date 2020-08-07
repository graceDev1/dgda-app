import {USER_LOADING, GET_USER, DELETE_USER} from './types';
import {returnErrors} from './errorAction';
import {tokenConfig} from './authAction';
import axios from 'axios';

// get user
export const getUser = () => (dispatch, getState) => {
    dispatch({type: USER_LOADING});
    axios.get('/api/user/admin', tokenConfig(getState)).then(res => dispatch({type: GET_USER, payload: res.data})).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status))
    })
}

// delete user
export const deleteUser = (id) => (dispatch, getState) => {
    axios.delete(`/api/user/${id}`, tokenConfig(getState)).then(res => dispatch({type: DELETE_USER, payload: id})).catch(err => returnErrors(err.response.data, err.response.status));
}
