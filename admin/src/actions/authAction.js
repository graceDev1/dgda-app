import {LOGIN_SUCCESS, LOGIN_FAIL} from './types';
import axios from 'axios';


// login admin
export const login = ({email, password}) => dispatch => { // headersd
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    const body = JSON.stringify({email, password});
    axios.post('/api/user/auth', body, config).then(res => dispatch({type: LOGIN_SUCCESS, payload: res.data})).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
        dispatch({type: LOGIN_FAIL});
    });
}

// get the token
export const tokenConfig = getState => { // get token localStockage
    const token = getState().auth.token;

    // header
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
}
