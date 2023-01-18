import React from "react";
import "../../pages/products/Products";
import { Icon, Rating } from "@mui/material";
import "./ProductCart.css";

export const ProductCart = (props) => {
  const { title, price, review, photos } = props;
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
          <button type="submit" className="product__btn">
            Add
          </button>
        </div>
      </div>
    </>
  );
};
