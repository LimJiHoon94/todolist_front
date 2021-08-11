import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


function App () {
const [message, setMessage] = useState([]);
  useEffect(() => {
  fetch('/api/test')
  .then(response =>response.text())
  .then(message => {
  setMessage(message);
  });
  },[])   

  /* useEffect(() => {
    axios.get('http://localhost:8080/test').then((response) =>{
        console.log(response);
    });
  },[]); */
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

