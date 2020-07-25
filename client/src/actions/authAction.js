import { 
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR
 } from '../actions/types';
import axios from 'axios';
 import { returnErrors} from './errorAction';

// loaduser 
export const loaduser = () => (dispatch, getState) =>{
    // user loading 
    dispatch({type: USER_LOADING});

    axios.get('/api/user', tokenConfig(getState))
    .then(res=>{
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    })
    .catch(err =>{
        dispatch(returnErrors(err, err))
        dispatch({
            type: AUTH_ERROR,
            payload: err 
        })
    });
}


// register user 
export const register = ({name, email, password}) => dispatch=>{
    // headers 
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    const body = JSON.stringify({name, email, password});
    axios.post('/api/user',body,config)
    .then(res=>{
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    })
    .catch(err=>{
        dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
        dispatch({type: REGISTER_FAIL})
    });
}


//LOGOUT

export const logout = () =>{
    console.log(">>>>>>>>>>>LOCOUT SUCCESS>>>>>>>");
    return{
        type: LOGOUT_SUCCESS
    }
}



// login user 
export const login = ({email, password}) => dispatch =>{
    // headersd
    const config = {
       headers: {
           'Content-type': 'application/json'
       }
   }

   const body = JSON.stringify({email,password});
   axios.post('/api/user/auth',body,config)
   .then(res => dispatch({
       type: LOGIN_SUCCESS,
       payload: res.data
   }))
   .catch(err=> {
       dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
       dispatch({type: LOGIN_FAIL}); 
   });
}


// get the token
export const tokenConfig = getState => {
    // get token localStockage
    const token = getState().auth.token;

    //header
    const config = {
        headers : {
            "Content-type":"application/json"
        }
    }

    if(token){
        config.headers['x-auth-token'] = token;
    }

    return config;
}