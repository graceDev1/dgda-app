import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {loadadmin} from './actions/authAction';
import LoginPage from './components/auth/LoginPage';
import MgttextRegl from './components/pages/MgttextRegl';
import NewReglement from './components/pages/NewReglement';
import PrivateRoute from './components/common/PrivateRoute';
import store from './store';
import './App.css';

export class App extends Component {

    componentDidMount() {
        store.dispatch(loadadmin());
    }

    render() {
        return (
            <Router>
                <Provider store={store}>
                    <Switch>
                        <PrivateRoute exact path='/'
                            component={MgttextRegl}/>
                        <div className="container">
                            <Route exact path='/login'
                                component={LoginPage}/>
                        </div>
                        <PrivateRoute exact path='/text'
                            component={NewReglement}/>
                    </Switch>
                </Provider>
            </Router>
        );
    }

}

export default App;
