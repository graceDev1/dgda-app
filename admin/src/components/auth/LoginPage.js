import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {login} from '../../actions/authAction';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export class LoginPage extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        login: PropTypes.func.isRequired
    }

    state = {
        email: '',
        password: ''
    }

    onChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault();
        const {email, password} = this.state;
        const admin = {
            email,
            password
        }
        this.props.login(admin)
    }

    render() {
        const {email, password} = this.state;
        if (this.props.isAuthenticated) {
            return <Redirect to='/'/>
        }
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <h2 className="text-center">Admin
                    </h2>
                    <form className="form"
                        onSubmit={
                            this.onSubmit
                    }>
                        <div className="form-group">
                            <input type="email" name="email"
                                value={email}
                                onChange={
                                    this.onChange
                                }
                                placeholder="Email Address"
                                className="form-control rounded"/>
                        </div>
                        <div className="form-group">
                            <input type="password" name="password"
                                value={password}
                                onChange={
                                    this.onChange
                                }
                                placeholder="Mot de passe"
                                className="form-control rounded"/>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block rounded">Connection</button>

                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({isAuthenticated: state.auth.isAuthenticated})

export default connect(mapStateToProps, {login})(LoginPage)
