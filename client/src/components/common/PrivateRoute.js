import React from 'react'
import {Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';




const PrivateRoute=({component: Component,auth, ...rest})=> (
    <Route
    { ...rest }
    render ={props =>{
        if(!auth){
            return <Redirect to="/login"/>
        }
    }}
    />
)

const mapStateToProps = (state)=> {
    return{
        auth: state.auth.isAuthenticated
    }
}
export default connect(mapStateToProps) (PrivateRoute);
