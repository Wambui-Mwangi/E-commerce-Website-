import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const AddProduct = ({ setProducts }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  // const handleTitleChange = (e) => {
  //   setTitle(e.target.value);
  // };

  // const handleImageChange = (e) => {
  //   setImage(e.target.value);
  // };

  const newDetails = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          image,
          price,
          description,
        }),
      });
      const result = await response.json();
      
      setProducts((prevProducts) => [...prevProducts, result.product]);
      console.log("Added Product:", result.product); 
      navigate("/products");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="new">
      <h1 className="header">Add Product</h1>
      <form className="form">
        <input type="text" placeholder="Image URL" value={image}/>
        <br />
        <br />
        <input type="text" placeholder="Product Name" value={title} />
        <br />
        <br />
        <input type="text" placeholder="Product Price" value={price} />
        <br />
        <br />
        <input type="text" placeholder="Product Description" value={description} />
        <br />
        <br />
        <button type="submit" className="extra">Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
