import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard.jsx';
import '../styles/ProductList.scss';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data));
  }, []);
  return (
    <div>
      <div className='search-container'>
        <input
          type='text'
          placeholder='Search products...'
          onChange={e => setSearch(e.target.value.toLowerCase())}
        />
      </div>
      <div className='product-list'>
        {products
          .filter(p => p.title.toLowerCase().includes(search))
          .map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};
export default ProductList;