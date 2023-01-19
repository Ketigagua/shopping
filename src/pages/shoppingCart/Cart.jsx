import React, { useEffect, useState } from "react";
import { parseJwt } from "../../helpers/jwt.helper";
import { ProductCart } from "../../components/productCart/ProductCard";
import axios from "../../services/Api";

export const Cart = (props) => {
  const [products, setProducts] = useState("");
  const { productId } = props;
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const { sub } = parseJwt(token);
  }, []);

  const fetchProductInfo = async (token) => {
    console.log(`Bearer ${token}`);
    const userId = localStorage.getItem("userId");
    try {
      const response = axios(`/user/${userId}/carts`, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvbkB0ZXN0LmNvbSIsImlhdCI6MTY3MjIyNjc0MCwiZXhwIjoxNjcyMjMwMzQwLCJzdWIiOiIxIn0.EqjKEChSMLIT6L6keumSAUa3aK48AjErEJI4hb8vpcE",
        },
        body: JSON.stringify({ userId: "", productList: "" }),
      });
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.error(e);
      setProducts([]);
    }
  };
  // const handleDelete = async (productId) => {
  //   const token = localStorage.getItem("authToken");
  //   try {
  //     const response = await fetch(`localhost:8000/carts/${productId}`, {
  //       method: "DELETE",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     const emptyProductList = products.filter((item) => item.id !== id);
  //     setProducts(emptyProducts);
  //   } catch (e) {
  //     console.error(e);
  //     setProducts(data);
  //   }
  // };

  return (
    <div className="Cart">
      <h3> Your products are here!</h3>
      {products?.map((item) => {
        <div key={item.id}>
          {products && (
            <div style={{ backgroundColor: "red" }}>
              {item.title}
              {/* <button onClick={() => handleDelete(item.id)}>Delete</button> */}
            </div>
          )}
        </div>;
      })}

      {products.length === 0 && (
        <div>
          <h1>Your Cart is emty</h1>
        </div>
      )}
    </div>
  );
};
