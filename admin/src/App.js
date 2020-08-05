import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {loadadmin} from './actions/authAction';
import LoginPage from './components/auth/LoginPage';
import MgttextRegl from './components/pages/MgttextRegl';
import NewReglement from './components/pages/NewReglement';
import Forum from './components/pages/Forum';
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
                        <PrivateRoute exact path='/forum'
                            component={Forum}/>
                        <div className="container">
                            <Route exact path='/login'
                                component={LoginPage}/>
                            <PrivateRoute exact path='/text'
                                component={NewReglement}/>
                        </div>

                    </Switch>
                </Provider>
            </Router>
        );
    }

}

export default App;
