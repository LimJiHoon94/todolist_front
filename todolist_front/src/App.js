/* eslint-disable */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './component/login/Login.jsx';
import Membership from './component/membership/Membership.jsx';
import './App.scss';


function App () {


return (
    <div className="reset_css">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/membership">
          <Membership />
        </Route>
        <Route path="/todoList">
            <div>todoList Main</div>
        </Route>
      </Switch> 
    </div>
  )
}



export default App;

