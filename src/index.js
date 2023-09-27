import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Home from './Home';
import SupportAdmin from './SupportAdmin';

const path = window.location.pathname

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    { path.indexOf('/support') === -1 ? <Home /> : <SupportAdmin /> }
  </React.StrictMode>,

);
