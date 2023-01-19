import React from "react";
import "../../pages/products/Products";
import { Icon, Rating } from "@mui/material";
import "./ProductCart.css";
import axios from "../../services/Api";

export const ProductCart = (props) => {
  const { title, price, review, photos } = props;

  const { id } = props;

  const handleSubmit = async () => {
    const token = localStorage.getItem("authToken");
    // console.log(userId, "add", productId);
    const data = await fetch("http://localhost:8000/carts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId: id,
        userId: localStorage.getItem("userId"),
      }),
    });
    console.log(data);
  };

  return (
    <>
      {/* <div className="producties"> */}

      <div className="productCart">
        <div className="product__Rating">
          <Rating
            name="read-only"
            precision={0.1}
            size="small"
            value={review}
            readOnly
          />
        </div>

        <img src={photos[0]} alt={title} className="productCard__img" />
      </div>

      <div className="productCard__content">
        <h6 className="product__name"> {title}</h6>
        <div className="product__info">
          <h5 className="productPrice">${price}</h5>
          {/* <div className="product__info">{id}</div> */}

          <button className="product__btn" onClick={handleSubmit}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};
