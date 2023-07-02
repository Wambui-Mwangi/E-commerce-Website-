import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import'./style.css'

const ProductDetails = () => {
  const { productId } = useParams();
  const  [product, setProduct] = useState(null);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
        console.log({data});
      } catch (error) {
        console.error(error);
      }
    };
    getProductDetails();
  }, [productId]);
  if (!product) {
    return <p>Loading product details...</p>;
  }
  return (
    <div>
      <h1 className='header'>Product Details</h1>
      <div className='singleProduct'>
        <img src={product.thumbnail} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Brand: {product.brand}</p>
        <p> Price: {product.price}</p>
        <h4> Ratings: {product.rating}</h4>
      </div>
    </div>
  );
};

export default ProductDetails;