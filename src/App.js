import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider, CartContext } from './context/CartContext.jsx';
import Home from './pages/Home.jsx';
import ProductPage from './pages/ProductPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import Cart from './components/Cart.jsx';
import './styles/Header.scss';
import { FaUser, FaShoppingBag } from "react-icons/fa";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="*" element={<h1>Page Not Found</h1>} />
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<CheckoutPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

const Header = () => {
  const { cart } = useContext(CartContext);

  // Calculate total quantity
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="cart-header">
      <div className="logo">Logo</div>
      <div className="header-menu">
        <FaUser className="icon" />
        <Link to="/cart" className="cart-icon">
        {/* <FaShoppingBag className="icon" /><span>{console.log("AMOUNT" ,CartContext)}</span> */}

          <FaShoppingBag className='icon' />
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
      </div>
    </header>
  );
};

export default App;
