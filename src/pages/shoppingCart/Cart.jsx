import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Icon, Rating } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import "./cart.css";
import { NavBar } from "../../components/navbar/Navbar";

export const Cart = (props) => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetchCarts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const updatedCarts = carts.map((cartItem) => {
        cartItem.product = products.find(
          (productItem) => (productItem.id = cartItem.productId)
        );

        return cartItem;
      });

      setCarts(updatedCarts);
    }
  }, [products]);

  const fetchCarts = async () => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("authToken");

    try {
      const response = await fetch(
        `http://localhost:8000/user/${userId}/carts`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      const productIds = data.map((item) => item.productId);

      fetchProductsByIds(productIds);

      setCarts(data);
    } catch (e) {
      console.error(e);

      setCarts([]);
    }
  };

  const fetchProductsByIds = async (ids) => {
    const query = ids.map((item) => `id=${item}&`).join("");
    const token = localStorage.getItem("authToken");

    try {
      const response = await fetch(`http://localhost:8000/products?${query}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      setProducts(data);
    } catch (e) {
      console.error(e);
      setProducts([]);
    }
  };

  const handleDelete = async (cartId) => {
    const token = localStorage.getItem("authToken");

    try {
      await fetch(`http://localhost:8000/carts/${cartId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const filteredCarts = carts.filter((item) => item.id !== cartId);
      setCarts(filteredCarts);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="shoppingCart">
      <NavBar />

      <h3 className="shoppingCart__heading"> Your products are here!</h3>
      <div className="gridContainer">
        {carts?.map((item) => (
          <div className="productContainer">
            <div key={item.id} className="cartContainer">
              <div className="productCart">
                <div className="product__Rating">
                  <Rating
                    name="read-only"
                    precision={0.1}
                    size="small"
                    value={item.product?.review}
                    readOnly
                  />
                </div>

                <img
                  src={item.product?.photos[0]}
                  alt={item.product?.title}
                  className="productCard__img"
                />
              </div>

              <div className="productCard__content">
                <h6 className="product__name"> {item.product?.title}</h6>

                <div className="product__info">
                  <h5 className="productPrice">${item.product?.price}</h5>
                  {/* <div className="product__info">{id}</div> */}

                  <button
                    className="product__btn"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <div className="productDescription">
              <h6>{item.product?.description}</h6>
            </div>
          </div>
        ))}
      </div>

      {carts?.length === 0 && (
        <div className="emptyCart">
          <div className="emptyCart__body">
            <Card.Title>
              <h5>Your Shopping cart is Empty</h5>
            </Card.Title>
            <Card.Text>
              <h3>Go to the products page</h3>
            </Card.Text>
            <Link to="/products">
              <button className="emptyBtn">Go to products</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
