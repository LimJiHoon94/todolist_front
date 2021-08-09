import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/* import axios from 'axios';
import Member from './service/Member'

const httpClient = axios.create({
  baseURL: 'http://localhost:8080'
  //params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});

const member = new Member(httpClient); */

ReactDOM.render(
  <React.StrictMode>
   {/*  <App Member={member}/> */}
   <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
