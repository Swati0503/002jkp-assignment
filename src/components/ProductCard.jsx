import React, {useContext} from "react";
import "../styles/ProductCard.scss";
import { CartContext } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const getStarClass = (index) => {
    const rating = product.rating;
    console.log(rating.rate);
    if (index < Math.floor(rating.rate)) return "filled"; // Full star
    if (index < rating.rate) return "half-filled"; // Half star
    return ""; // Empty star
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <h3 className="product-title">{product.title}</h3>
      <p className="product-description">{product.description.length > 250 ? product.description.slice(0, 250) + "..." : product.description}</p>
      <div className="product-rating">
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} className={`star ${getStarClass(index)}`}>★</span>
        ))}
      </div>
      <p className="product-price">${product.price}</p>
      </Link>
      <button className="add-to-bag" onClick={() => addToCart(product)}>Add to Bag</button>
    </div>
  );
};

export default ProductCard;