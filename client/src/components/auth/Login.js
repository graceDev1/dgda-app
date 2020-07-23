import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect } from 'react-redux';
import { login } from '../../actions/authAction';
import { Link, Redirect } from 'react-router-dom';

export class Login extends Component {

    state = {
        username:'',
        password:''
    }

    static propTypes = {
        login : PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    onSubmit = e =>{
        e.preventDefault()
        const { email, password} =this.state;
        const user = {
            email,
            password
        }
        this.props.login(user)
    }

    onChange = e => this.setState({[e.target.name]: e.target.value});

    render() {
        const {username, password} = this.state;
        if(this.props.isAuthenticated){
            return <Redirect to="/newforum"/>
        }
        return (
            <div className="col-md-6 m-auto" >
                <div className="card card-body mt-5">
                    <h2>Connectez Vous Ici </h2>
                    <form className="form" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" name="username" value={username} onChange={this.onChange} placeholder="Nom d'utilisateur" className="form-control rounded"/>
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" value={password} onChange={this.onChange} placeholder="Mot de passe" className="form-control rounded"/>
                        </div>
                        <p>
                            Avez-vous Compte?<Link to="/register">S'inscrire</Link>
                        </p>
                        <button type="submit" className="btn btn-primary rounded">Connection</button>
                       
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        isAuthenticated: state.auth.isAuthenticated
    }
}
export default connect(mapStateToProps, {login})(Login);
