import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Navigation } from "../Navbar";

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
      <Navigation onLogOut={handleLogout} />
      <Outlet />
    </div>
  );
};
