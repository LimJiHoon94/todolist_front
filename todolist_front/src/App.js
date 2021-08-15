import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


function App () {

 const [members , setMembers] = useState([]); 
const [message, setMessage] = useState([]);
  useEffect(() => {
  fetch('/api/test')
  .then(response =>response.text())
  .then(message => {
  setMessage(message);
  });
  },[])      

   useEffect(() => {
    fetch('/api/user/getallusers').then((response) =>{
        console.log(response.json);
        //setMembers = response;
        setMembers(response);
    });
  },[]); 
return (
<div className="App">
<header className="App-header">
<img src={logo} className="App-logo" alt="logo"/>
<h1 className="App-title">{message}</h1>
</header>
<p className="App-intro">
To get started, edit <code>src/App.js</code> and save to reload.
</p>
</div>
)
}
export default App;

