import React, {Fragment} from 'react';
import {
  BrowserRouter, //lo que va a englobar toda mi pagina
  Switch, // el switch de los routes
  Route // equivalente a 'case' de los switch
} from 'react-router-dom';
import Header from './components/Header/Header';
import Premium from './components/Premium/Premium'
import Users from './pages/Users/Users';
import NewUsers from './pages/newUsers/NewUsers';
import Graphic from './pages/Graphic/Graphic';
import './pages/newUsers/NewUsers'
import './App.scss';


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Premium />
        <Switch>
          <Route exact path="/" component={Users} /> 
          <Route exact path="/newusers" component={NewUsers} />
          <Route exact path="/graphic" component={Graphic} /> 
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
