import NavBar from "../features/navbar/Navbar";
import React, { Component } from "react";
import ProductList from "../features/product/components/ProductList";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <NavBar>
        <ProductList></ProductList>
      </NavBar>
      <Link to="/admin">Admin</Link>
    </div>
  );
}

export default Home;
