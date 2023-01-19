import React, { useEffect, useState } from "react";
import { parseJwt } from "../../helpers/jwt.helper";
import { ProductCart } from "../../components/productCart/ProductCard";
import axios from "../../services/Api";

export const Cart = (props) => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetchCarts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const updatedCarts = carts.map(cartItem => {
        cartItem.product = products.find(productItem => productItem.id = cartItem.productId);

        return cartItem;
      });

      setCarts(updatedCarts);
    }
  }, [products]);

  const fetchCarts = async () => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem('authToken');

    try {
      const response = await fetch(`http://localhost:8000/user/${userId}/carts`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      const productIds = data.map(item => item.productId);

      fetchProductsByIds(productIds);

      setCarts(data);
    } catch (e) {
      console.error(e);

      setCarts([]);
    }
  }

  const fetchProductsByIds = async (ids) => {
    const query = ids.map(item => `id=${item}&`).join('');
    const token = localStorage.getItem('authToken');

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
    <div className="Cart">
      <h3> Your products are here!</h3>
      {carts?.map((item) => (
        <div key={item.id}>
          <div style={{ backgroundColor: "red" }}>
            {item.product?.title}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        </div>
      ))}

      {carts?.length === 0 && (
        <div>
          <h1>Your Cart is emty</h1>
        </div>
      )}
    </div>
  );
};
