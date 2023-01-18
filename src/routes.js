import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Products } from "./pages/products/Products";
import { Cart } from "./pages/shoppingCart/Cart";
import { Login } from "./pages/account/Login/Login";
import { Signup } from "./pages/account/signup/Signup";
import { authRoutesLoader } from "./loaders/auth.loader";
import { protectedRoutesLoader } from "./loaders/protected.loader";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: authRoutesLoader,
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/Signup",
    element: <Login />,
    loader: protectedRoutesLoader,
    children: [
      {
        index: true,

        element: <Signup />,
      },
    ],
  },
]);
