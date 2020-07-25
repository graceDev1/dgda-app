import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavItem } from 'reactstrap';
import  Login  from '../auth/Login';
import  Logout  from '../auth/Logout';
import Register from '../auth/Register';


export class  Header extends Component {
  
    render() {
      const {isAuthenticated, user } = this.props.auth;
    
      const authLink = (
        <Fragment>
          <NavItem>
            <span className="navbar-text ml-5">
          <strong className="text-white">{user ? `Welcome ${user.name}`: null}</strong>
          </span>
          </NavItem>
          <NavItem>
              <Logout/>
          </NavItem>
        </Fragment>
      )
     
      const guestLink = (
        <Fragment>
                <NavItem className="nav-item">
                    <Register/>
                </NavItem>
                <NavItem className="nav-item">
                    <Login/>
                </NavItem>
            </Fragment>
      )
      
      return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link className="navbar-brand" to="/">DGDA</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Acceuil <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reglement">Reglement</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/forum">Forum</Link>
            </li>
            
          </ul>
          <ul className="navbar-nav float-right">
            {isAuthenticated ? authLink : guestLink}
          </ul>
        </div>
      </nav>
    </header>
      )

    }
}
const mapStateToProps = state =>({
  auth: state.auth
})

export default connect(mapStateToProps, null) (Header)
