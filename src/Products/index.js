import React, { useState, useEffect } from "react";
import "./style.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      getProducts();
    })();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setProducts(result.products);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log({ products });

  return (
    <div>
      <h1 className="header">Products</h1>

      <Link to="/AddProducts" className="btn">
        <button type="Submit" className="extra">Add Product</button>
      </Link>
      <div className="products-container ">
        {products.map((item) => (
          <div key={item.id} className="one_product">
            <img src={item.images[1]} className="" />
            <h3 className="product-title">{item.title}</h3>
            <Link to={`/products/${item.id}`} className="btn">
              <button type="submit" className="extra">View</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
