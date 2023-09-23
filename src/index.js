import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './app';
import reportWebVitals from './reportwebvitals';
import './styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root');

const appRoot = createRoot(root);
appRoot.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
