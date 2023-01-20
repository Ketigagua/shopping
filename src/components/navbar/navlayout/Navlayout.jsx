import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { NavBar } from "../Navbar";

export const NavLayout = () => {
  const navigate = useNavigate();
  // const token = localStorage.postItem("authToken");

  // if (typeof window !== "undefined" && window.localStorage) {
  //   let handleLogout = localStorage.removeItem("authToken");
  // }
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    return navigate("/");
  };

  return (
    <div className="navlayout">
      <NavBar onLogOut={handleLogout} />
      <Outlet />
    </div>
  );
};
