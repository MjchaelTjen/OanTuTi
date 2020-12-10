import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Tạo store tổng của ứng dụng
// import { rootReducer } from './redux/OanTuTiReducer';
// Provider là component kết nối redux store với component react
import { Provider } from 'react-redux';
import { store } from '../src/redux/rootReducer'

// const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
