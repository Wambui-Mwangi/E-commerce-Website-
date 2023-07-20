import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./style.css";

const AddProduct = () => {

  const [newProduct, setNewProduct] = useState({
    image: "",
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
  })

  const {image, title, description, price, discountPercentage, rating, stock, brand, category} = newProduct
 
 const handleChange = (e) => {
  setNewProduct({
    ...newProduct,
    [e.target.name]: [e.target.value]
  })
 }

  const handleSubmit = async() =>{
 try{
      const response = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image,
          title,
          description,
          price,
          discountPercentage,
          rating,
          stock,
          brand,
          category
        }),
      });
      const result = await response.json();
      console.log(result)
    }
    
    catch (error) {
      console.log(error.message);
    }
  }
  

  return (
    <div className="new">
      <h1 className="header">Add Product</h1>
      <form className="form">
        <input type="text" name='image' value={newProduct.image} placeholder="Image URL" onChange={handleChange}/>
        <br />
        <br />
        <input type="text" name = 'title' value={newProduct.title} placeholder="Product Name" onChange={handleChange} />
        <br />
        <br />
        <input type="text" name = 'price' value={newProduct.price}placeholder="Product Price" onChange={handleChange} />
        <br />
        <br />
        <input type="text" name = 'description' value={newProduct.description}placeholder="Product Description" onChange={handleChange} />
        <br />
        <br />
        <input type="text" name = 'discountPercentage' value={newProduct.discountPercentage}placeholder="Discount percentage" onChange={handleChange} />
        <br />
        <br />
        <input type="text" name='rating' value={newProduct.rating}placeholder="Rating" onChange={handleChange} />
        <br />
        <br />
        <input type="text" name = 'stock' value={newProduct.stock}placeholder="Stock" onChange={handleChange} />
        <br />
        <br />
        <input type="text" name = 'brand' value={newProduct.brand}placeholder="Brand" onChange={handleChange} />
        <br />
        <br />
        <input type="text" name = 'category' placeholder="Category" onChange={handleChange} />
        <br />
        <br />
        <button type="submit" className="extra" onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
