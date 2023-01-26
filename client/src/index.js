import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import App from './Containers/App';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store/index.js';
import { Auth0Provider } from "@auth0/auth0-react";

axios.defaults.baseURL = 'https://adil-bet-production.up.railway.app/';
/* axios.defaults.baseURL = 'http://localhost:3001/'; */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-ihao33fcgv01dz1n.us.auth0.com"
  clientId="N7If0oEPTTr6GlCUzpZsI7dYzie5QDG6"
  redirectUri={window.location.origin}
  >
  <Provider store={store}>
    <App />
  </Provider>
  </Auth0Provider>
);