import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Navigation } from "./components/navbar/Navbar";
import { router } from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Navigation />
    <RouterProvider router={router} />
  </>
);
