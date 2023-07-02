import React from "react";
import "./style.css"
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
  

const LogIn = () =>{
    return(
        <div>
            <form>
                <h1>Log In</h1>
                <input placeholder="Enter Username" type="text"/>
                <br/>
                <br/>
                <input placeholder="Enter Password" type="password"/>
                <br/>
                <br/>
                <Link to= '/products' className="btn"><button type="Submit">Log In</button></Link>
                
            </form>
            <br/>
    <br/>
    <br/>
        </div>
    )
}

export default LogIn