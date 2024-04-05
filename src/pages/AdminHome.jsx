import NavBar from "../features/navbar/Navbar"
import React, { Component } from "react";
import ProductList from "../features/product/components/ProductList"
import AdminProductList from "../features/admin/components/AdminProductList";

function AdminHome() {
  return (
    <div>
      <NavBar>
        <AdminProductList></AdminProductList>
      </NavBar>
    </div>
  );
}

export default AdminHome;