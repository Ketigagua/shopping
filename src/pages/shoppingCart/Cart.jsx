import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartItem } from "./cart-item";


export const Cart = () => {
  const navigate = useNavigate();

  useEffect(() => {

  }, []);

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
    </div>
  );
};
