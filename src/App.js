import logo from './logo.svg';
import './App.css';
import LogIn from './LogIn';
import Products from './Products';
import ProductDetails from './ProductDetails';
import AddProducts from './AddProducts';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";


function App() {
return <BrowserRouter>
<nav className='nav'>
<Link to="/">LogIn</Link>
<Link to="/Products"> Products </Link>
<Link to="/AddProducts"> AddProducts </Link>
</nav>
  <Routes>
    <Route path='/' element={<LogIn/>}/>
    <Route path="/products" element={<Products />} />
    <Route path='/products/:productId' element={<ProductDetails/>}/>
    <Route path='/productDetails' element={<ProductDetails/>}/>
    <Route path='/AddProducts' element={<AddProducts/>}/>
  </Routes>
</BrowserRouter>

};


export default App;
