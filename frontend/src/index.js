import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';
import { Provider } from "react-redux"
import { positions, transitions, Provider as AlertProvider } from "react-alert"
import AlertTemplate from 'react-alert-template-basic';
import swDev from './swDev';

const root = ReactDOM.createRoot(document.getElementById('root'));

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.FADE
}

root.render(

  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>

);

swDev()

