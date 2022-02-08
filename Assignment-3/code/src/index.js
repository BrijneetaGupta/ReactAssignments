import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/* import Appointment from './Appointment';
import Order from './Order';
import Product from './Product'; */
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <App header_info = {header_info} /> */}
    {/* <Appointment appointment_info = {appointment_info} /> */}
    {/* <Order order_info = {order_info} /> */}
    {/* <Product product_list = {product_list} /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
