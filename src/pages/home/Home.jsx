import React, { useState } from "react";
// import { Slider } from "./Carousel";
import { Products } from "../products/Products";

import "./home.css";
import { Carousel } from "./Carousel";
import { Navigation } from "../../components/navbar/Navbar";

export const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Products />
    </div>
  );
};
