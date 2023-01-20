import { SET_PAGE } from "./productconstants";
import { SET_ORDERING } from "./productconstants";
import { SET_LIMIT } from "./productconstants";
import { SET_MAX_PRICE } from "./productconstants";
import { SET_MIN_PRICE } from "./productconstants";
import { SET_PRODUCT } from "./productconstants";
import { initialValue } from "../products.props";

export const Productreducer = (data = initialValue, action) => {
  switch (action.type) {
    case "SET_PAGE": {
      return {
        ...data,
        page: action.payload,
      };
    }
    case "SET_LIMIT": {
      return {
        ...data,
        limit: action.payload,
      };
    }
    case "SET_ORDERING": {
      return {
        ...data,
        ordering: action.payload,
      };
    }
    case "SET_FILTER": {
      return {
        ...data,
        maxPrice: action.payload.maxPrice,
        minPrice: action.payload.minPrice,
      };
    }

    case "SET_PRODUCT": {
      return {
        ...data,
        products: action.payload,
      };
    }
    default: {
      return data;
    }
  }
};
