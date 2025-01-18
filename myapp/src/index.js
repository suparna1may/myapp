import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/css/all.min.css';
import './assets/css/style.min.css';
import './assets/css/demo2.min.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/animate.min.css';
import './assets/css/magnific-popup.min.css';
import './assets/css/stickyicon.css';

import './assets/fonts/riode.ttf';
import './assets/fonts/fa-solid-900.woff2';
import './assets/fonts/fa-brands-400.woff2';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { store } from './redux/data/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <App/>
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
