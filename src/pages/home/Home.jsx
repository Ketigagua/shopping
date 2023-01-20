import React from "react";
import { Products } from "../products/Products";
import "./home.css";
import { NavLayout } from "../../components/navbar/navlayout/Navlayout";
import { NavBar } from "../../components/navbar/Navbar";

export const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Products />
      <NavLayout />
    </div>
  );
};
