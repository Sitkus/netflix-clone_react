import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import store from './app/redux/store';
import './css/default.css';
import GlobalThemeProvider from './theme';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalThemeProvider>
        <App />
      </GlobalThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
