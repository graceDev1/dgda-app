import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

export class PrivateRoute extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool
    }
    render() {
        const Component = this.props.component;
        return this.props.isAuthenticated ? (
            <Component/>
        ):(
            <Redirect to="/login"/>
        )
            
    }
}

const mapStateToProps = state =>({
    isAuthenticated : state.auth.isAuthenticated
})


export default connect(mapStateToProps, null)(PrivateRoute);
