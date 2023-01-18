import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import "./navbar.css";
export const Navigation = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#"> Shop</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">
                {" "}
                Cart <AddShoppingCartIcon />
              </a>
            </li>
            <li>
              {/* <Link to="/Login"> */}
              <button className="nav__btn" to>
                Login
                <PersonIcon />
              </button>
              {/* </Link> */}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
