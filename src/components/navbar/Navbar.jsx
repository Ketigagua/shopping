import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import NavDropdown from "react-bootstrap/NavDropdown";
import PersonIcon from "@mui/icons-material/Person";
import Form from "react-bootstrap/Form";
import logo from "./logo.PNG";
import { Link } from "react-router-dom";

import "./navbar.css";
export const Navigation = (props) => {
  const { onLogOut } = props;

  return (
    <>
      <header>
        <div className="nav__logo">
          <Link to="/products">
            <img src={logo} />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </li>
            <li>
              <Link to="/Products">Products</Link>
            </li>
            <li>
              <Link to="/Cart">
                Cart <AddShoppingCartIcon />
              </Link>
            </li>

            <li>
              <PersonIcon className="person" fontSize="large" />
            </li>
          </ul>
          <NavDropdown title="John Doe" className="logout">
            <PersonIcon fontSize="large" />

            <NavDropdown.Divider />
            <button onClick={onLogOut}>Logout</button>

            <NavDropdown.Item onClick={onLogOut}>Log Out</NavDropdown.Item>
          </NavDropdown>
        </nav>
      </header>
    </>
  );
};
