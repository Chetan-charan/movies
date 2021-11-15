import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
// import CardList from './card';
// import ButtonTheme from './buttonTheme';

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <App />
        {/* <ButtonTheme/> */}
  </Router>
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();
