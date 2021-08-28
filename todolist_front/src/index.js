/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter}  from 'react-router-dom';
import {Provider} from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>{/* 라우터 연동 */}
      {/* <Provider>{/* redux 연동 */} 
        <App />
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
