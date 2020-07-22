import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layouts/Header';
import Home from './components/pages/Home';
import Forum from './components/pages/Forum';
import Reglement from './components/pages/Reglement';
// import Footer from './components/layouts/Footer';

function App() {
  return (
    <Router>
    <Provider store={store}>
      <div>
        <Header/>
        <Route exact path="/" component={Home}/>
        <div className="container mt-5">
        <Route exact path="/forum" component={Forum}/>
        <Route exact path="/reglement" component={Reglement}/>
        </div>
      </div>
     
    </Provider>
    </Router>
  );
}

export default App;
