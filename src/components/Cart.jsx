import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import '../styles/Cart.scss';
import { FaPlus, FaMinus } from "react-icons/fa";


const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <nav>Home / Link1 / Link2</nav>
      </div>

      <div className="cart-content">
        {/* Left Side - Pickup and Bag */}
        <div className="cart-left">
          <h2>Pickup and Delivery Options</h2>
          <div className="delivery-options">
            <button>Ship</button>
            <button>Pickup</button>
            <button>Same day</button>
          </div>

          <div className="cart-bag">
            <h3>Bag</h3>
            <p>{cart.length} Item{cart.length !== 1 && 's'}</p>

            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <p>Color: {item.color}</p>
                  <div className="quantity-selector">
                  <div className="quantity-control">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <FaMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    disabled={item.quantity >= item.stock}
                  >
                    <FaPlus />
                  </button>
                </div>
                  </div>
                </div>
                <p className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</p>
                <div className="cart-item-actions">
                  <button onClick={() => removeFromCart(item.id)}>🗑 Remove</button>
                  {/* <button>📌 Save for Later</button> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="cart-summary">
          <h3>Order Summary</h3>
          <p>Sub Total: <span>${total.toFixed(2)}</span></p>
          <p>Shipping: <span>Free</span></p>
          <p>Estimated Tax: <span>---</span></p>
          <h3>Estimated Total: <span>${total.toFixed(2)}</span></h3>
          <button className="checkout-button">Checkout</button>
          <div className="coupon-section">
            <input type="text" placeholder="Add a coupon code" />
            <button>+</button>
          </div>
        </div>
      </div>

      <footer>Footer</footer>
    </div>
  );
};

export default Cart;
