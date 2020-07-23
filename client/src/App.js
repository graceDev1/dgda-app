import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layouts/Header';
import Home from './components/pages/Home';
import Forum from './components/pages/Forum';
import Reglement from './components/pages/Reglement';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NewForum from './components/pages/NewForum';
import PrivateRoute from './components/common/PrivateRoute';
// import Footer from './components/layouts/Footer';

function App() {
  return (
    <Router>
    <Provider store={store}>
      <div>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/forum" component={Forum}/>
        <div className="container mt-5">
        <Route exact path="/reglement" component={Reglement}/>
        <Route exact path="/login" component={Login}/>
        <PrivateRoute exact path="/newforum" component={NewForum}/>
        <Route exact path="/register" component={Register}/>
        </div>
      </div>
     
    </Provider>
    </Router>
  );
}

export default App;
