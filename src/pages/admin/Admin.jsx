import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="container flex">
      <div className="flex flex-col items-center w-80 h-screen bg-slate-200">
        <b>Admin</b>
        <NavLink className={"border-t w-full text-center"} to="manage">
          <p>Manage</p>
        </NavLink>
        <NavLink className={"border-t w-full text-center"} to="name">
          <p>Lorem</p>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Admin;