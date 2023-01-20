import React from "react";
import { useState } from "react";
import { useEffect, useReducer } from "react";
import { Button, Grid, Pagination, Typography } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { ProductCart } from "../../components/productCart/ProductCard";
import { fetchProduct } from "../../services/Product.service";
import { Cart } from "../shoppingCart/Cart";
import "./Products.css";
import { ProductFilter } from "../../components/productFilters/ProductFilter";
import { Productreducer } from "./reducer/productReducer";
import {
  SET_FILTER,
  SET_ORDERING,
  SET_PAGE,
  SET_PRODUCT,
} from "./reducer/productconstants";
import { initialValue } from "./products.props";

export const Products = () => {
  const [data, dispatch] = useReducer(Productreducer, initialValue);
  const { page, limit, ordering, maxPrice, minPrice, products, description } =
    data;
  const totalpages = Math.ceil(data.products.length / 6);

  useEffect(() => {
    getProducts(page, limit, ordering, maxPrice, minPrice);
  }, [page, limit, ordering, maxPrice, minPrice]);

  const getProducts = async (
    nextPage,
    nextLimit = 6,
    nextOrder,
    maxValue,
    minValue
  ) => {
    const data = await fetchProduct(
      nextPage,
      nextLimit,
      nextOrder,
      maxValue,
      minValue
    );
    dispatch({
      type: SET_PRODUCT,
      payload: data,
    });
  };
  const handlePaginationChange = (event, nextPage) => {
    dispatch({
      type: SET_PAGE,
      payload: nextPage,
    });
    getProducts(nextPage, 6, ordering);
  };
  const handleSortProducts = () => {
    const newOrder = ordering === "asc" ? "desc" : "asc";
    dispatch({
      type: SET_ORDERING,
      payload: newOrder,
    });
  };
  const handleFilter = (max, min) => {
    dispatch({
      type: SET_FILTER,
      payload: {
        maxPrice: max,
        minPrice: min,
      },
    });
  };

  return (
    <div className=" products">
      <Grid container item className="products__header"></Grid>
      <Grid container item spacing={2} className="products__container">
        <Grid container item md={2} xs={12} className="product__filter">
          <ProductFilter maxPrice={0} minPrice={0} onChange={handleFilter} />
        </Grid>
        <Grid className="productList" item md={8} xs={12}>
          {products?.map((item) => (
            <div item key={item.id} className="productCard">
              <ProductCart {...item} />
              {/* <Cart {...item} /> */}
            </div>
          ))}
        </Grid>
        <Grid
          container
          item
          md={2}
          xs={12}
          spacing={1}
          className="product__price"
        >
          <button className="btn" onClick={handleSortProducts}>
            {" "}
            Price
            {ordering === "asc" ? (
              <KeyboardDoubleArrowUpIcon />
            ) : (
              <KeyboardDoubleArrowDownIcon />
            )}
          </button>
        </Grid>
        <Grid container item xs={12} className="product__pagination">
          <Pagination count={6} page={1} onChange={handlePaginationChange} />
        </Grid>
      </Grid>
    </div>
  );
};
