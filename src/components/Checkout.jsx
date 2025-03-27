import React, { useState } from 'react';
import '../styles/Checkout.scss';

const Checkout = () => {
  const [details, setDetails] = useState({ name: '', email: '', address: '' });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  return orderPlaced ? (
    <h2>Order Placed Successfully!</h2>
  ) : (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="address" placeholder="Address" onChange={handleChange} required />
      <button type="submit">Place Order</button>
    </form>
  );
};

export default Checkout;