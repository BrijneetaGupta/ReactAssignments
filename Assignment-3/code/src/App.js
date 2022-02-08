import React from 'react';
// import logo from './logo.svg';
import './App.css';


var arrow="<"

const header_info = {
  customer_name : 'Alan Ford',
  customer_id : '5152'
}
const appointment_info = {
  appointment : new Date().toLocaleDateString(),
  email : 'alan.form@email.nl',
  customer_phone : '31123456789'
}
const order_info = {
  order_status : 'In Progress',
  door : 'Mark',
  order_time : new Date().toLocaleTimeString()
}
const product_list = {
  product_img : 'https://www.w3schools.com/howto/img_avatar.png',
  product_name : 'Boltart',
  product_description : 'Lorem ipsum may be used as a placeholder before the final copy is available.'
}


function App() {
  // const {header_info} = props;
  return (
    <div className="site-container">
      <div className='header'>
        <span>{arrow}</span>
        <div className='info_header'>
          <h3>{header_info.customer_name}</h3>
          <span>{header_info.customer_id}</span>
        </div>
        <button>Print</button>
      </div>

      {/* APPOINTMENT SECTION */}
      <div className="appointment-container">
          <div className='customer-info'>
            <h3>Appointment On: <span>{appointment_info.appointment}</span></h3>
            <h3>Email: <span>{appointment_info.email}</span></h3>
            <h3>Phone: <span>{appointment_info.customer_phone}</span></h3>
          </div>        
      </div>

      {/* ORDER SECTION */}
      <div className="order-container">
        <div className='order-info'>
            <div className='content'>
                <h3>Status</h3>
                <span>{order_info.order_status}</span>
            </div>
            <div className='content'>
                <h3>Door</h3>
                <span>{order_info.door}</span>
            </div>
            <div className='content'>
                <h3>Time</h3>
                <span>{order_info.order_time}</span>
            </div>
        </div>
      </div>

      {/* PRODUCT SECTION */}
      <div className="product-container">
        <div className='product-list'>
          <div className='product-image'>
              <img src={product_list.product_img} alt="Product" />
          </div>
          <div className='product-desc'>
              <h3>{product_list.product_name}</h3>
              <p>{product_list.product_description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
