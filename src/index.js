import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index';

store.subscribe(() => {
  console.log(store.getState());
  localStorage.setItem('APP_DATA', JSON.stringify(store.getState()));
  localStorage.setItem('DATE', new Date().getDate());
});
store.dispatch({ type: 'ADD' });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
