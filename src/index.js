import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";

ReactDOM.render(<App />, document.getElementById('root'));

window.addEventListener('message', function(event) {
    alert(event.data)
  });