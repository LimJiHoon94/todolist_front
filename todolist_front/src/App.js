/* eslint-disable */
import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Login from './component/login/Login.jsx';
import Membership from './component/membership/Membership.jsx';
import TodoList from './component/todolist/TodoList.jsx'
import './App.scss';


function App () {

  let [user , setUser] = useState([]);

  let history = useHistory();
  function testFunction(){
    console.log(user);
    console.log("TESTTEST");
    console.log(user);
    history.push('/todoList');
  }

return (
    <div className="reset_css">
      <Switch>
        <Route exact path="/">
          <Login  setUser={setUser} user={user} testFunction={testFunction} />
        </Route>
        <Route exact path="/membership">
          <Membership />
        </Route>
        <Route path="/todoList">
          <TodoList user={user}/>
        </Route>
      </Switch> 
    </div>
  )
}



export default App;

