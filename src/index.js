import React from 'react';
import ReactDOM from 'react-dom'; // ReactDOM ka import theek karna hai
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  ContextProvider  from '../src/Context/Context';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="http://dev-xpc75tcwurbm30a7.us.auth0.com"
    clientId="vFiO2wZV3RcUhL9ctuaEvQEn9xEQw1yG"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <ContextProvider>
        <App />
      </ContextProvider>
    </Auth0Provider>
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
