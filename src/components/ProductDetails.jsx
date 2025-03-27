import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext.jsx';
import '../styles/ProductDetails.scss';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data));
  }, [id]);
  const getStarClass = (index) => {
    const rating = product.rating;
    console.log(rating.rate);
    if (index < Math.floor(rating.rate)) return "filled"; // Full star
    if (index < rating.rate) return "half-filled"; // Half star
    return ""; // Empty star
  };
  if (!product) return <p>Loading...</p>;
  return (
    <div className="product-detail">
      <nav className="breadcrumb">
        <a href="/">Home</a> / <a href="/">Link1</a> / <a href="/">Link2</a>
      </nav>
      {console.log(product)}

      <div className="product-container">
        <div className="product-images">
          <div className="main-image">
            <img src={product.image} alt="Product" />
          </div>
          <div className="thumbnail-container">
            <img src={product.image} alt="Image 1" />
            <img src={product.image} alt="Image 2" />
            <img src={product.image} alt="Image 3" />
            <img src={product.image} alt="Image 4" />
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-description">{product.description}</p>

          <div className="ratings">
          {Array.from({ length: 5 }, (_, index) => (
          <span key={index} className={`star ${getStarClass(index)}`}>★</span>
        ))}
            <button className="reviews-btn">Reviews</button>
            <button className="qa-btn">Q & A</button>
          </div>

          <div className="price">$47.00</div>

          <div className="availability">
            <p>Available to ship</p>
            <p>Check in-store availability</p>
            <p>See same day delivery eligibility in bag</p>
          </div>

          <button className="add-to-bag" onClick={() => addToCart(product)}>Add to Bag</button>
        </div>
      </div>

      <footer className="footer">Footer</footer>
    </div>
  );
};

export default ProductDetail;



// import React, { useEffect, useState, useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { CartContext } from '../context/CartContext.jsx';
// import '../styles/ProductDetails.scss';
//
// const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const { addToCart } = useContext(CartContext);
//   useEffect(() => {
//     axios
//       .get(`https://fakestoreapi.com/products/${id}`)
//       .then(response => setProduct(response.data));
//   }, [id]);
//   if (!product) return <p>Loading...</p>;
//   return (
//     <div className='product-details'>
//       <img src={product.image} alt={product.title} />
//       <h2>{product.title}</h2>
//       <p>{product.description}</p>
//       <p>${product.price}</p>
//       <button onClick={() => addToCart(product)}>Add to Cart</button>
//     </div>
//   );
// };
// export default ProductDetails;