import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const AddProduct = ({ setProducts }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          image,
        }),
      });
      const result = await response.json();
      // Update the products state with the newly added product
      setProducts((prevProducts) => [...prevProducts, result.product]);
      console.log("Added Product:", result.product); // Log the added product
      navigate("/products");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1 className="header">Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={handleImageChange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Product Name"
          value={title}
          onChange={handleTitleChange}
        />
        <br />
        <br />
        <button type="submit" className="extra">Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
