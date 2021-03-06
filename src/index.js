import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';



import * as serviceWorker from './serviceWorker';

ReactDOM.render(

  <App />,
  document.getElementById('root')
);
serviceWorker.unregister();
