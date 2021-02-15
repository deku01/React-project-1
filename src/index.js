//Import the React and ReactDom libraries 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

//Take the react component and show on the screen
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
