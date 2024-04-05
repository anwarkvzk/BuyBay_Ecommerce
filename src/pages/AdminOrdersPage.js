import NavBar from "../features/navbar/Navbar";
import React from "react";
import AdminOrders from "../features/admin/components/AdminOrders";

function AdminOrderPage() {
  return (
    <div>
      <NavBar>
        <AdminOrders></AdminOrders>
      </NavBar>
    </div>
  );
}

export default AdminOrderPage;
