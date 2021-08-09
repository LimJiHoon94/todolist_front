import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
//import Member from 'service/Member.js'



function App() {
  //멤버 초기화
/*    const [members, setMembers] = useState([]); */


  /* async getMembers() {
    const response = await fetch('http://localhost:8080/members');
    const result = await response.json();
    console.log(result);
    return result.items;
  } */

/*   useEffect(()=> {
    member.getMembers()
    
    //const response = await fetch('http://localhost:8080/members') 
    //axios.get('http://localhost:8080/members')
    .then(res => setMembers(res) );
  },[]);  */


  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
