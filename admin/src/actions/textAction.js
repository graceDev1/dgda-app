import {
    TEXT_LOADING,
    GET_TEXT,
    ADD_TEXT,
    UPDATE_TEXT,
    DELETE_TEXT
} from './types';

import {returnErrors} from './errorAction';
import {tokenConfig} from './authAction';
import axios from 'axios';


// get text reglementaire
export const getText = () => dispatch => {
    dispatch({type: TEXT_LOADING});
    axios.get('/api/post').then(res => {
        dispatch({type: GET_TEXT, payload: res.data})
    }).catch(err => {
        dispatch(returnErrors(err, err))
    })
}


// add text reglementaire
export const addText = ({theme, filePdf}) => dispatch => {
    dispatch({type: TEXT_LOADING});
    const body = JSON.stringify({theme, filePdf});
    axios.post('/api/post', body).then(res => {
        dispatch({type: ADD_TEXT, payload: res.data})
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
    })
}


// update textreglementaire

export const updateText = ({id, theme, filePdf}) => dispatch => {


    const body = JSON.stringify({theme, filePdf});
    axios.patch(`/api/post/${id}`, body).then(res => {
        dispatch({type: UPDATE_TEXT, payload: res.data})
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}


// DELETE TEXT
export const deleteText = (id) => (dispatch, getState) => {
    axios.delete(`/api/post/${id}`, tokenConfig(getState)).then(res => dispatch({type: DELETE_TEXT, payload: id})).catch(err => console.log(err));
}
