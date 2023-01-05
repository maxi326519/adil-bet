import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Containers/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/index.js';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-588r82613qdycpnk.us.auth0.com"
  clientId="V8rFUHtIEr5dOClFvs3MTz4zBCg3ZgwV"
  redirectUri={window.location.origin}
  >
  <Provider store={store}>
    <App />
  </Provider>
  </Auth0Provider>
);

