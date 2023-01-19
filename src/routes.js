import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/home/Home";
import { Cart } from "./pages/shoppingCart/Cart";
import { Login } from "./pages/account/Login/Login";
import { Signup } from "./pages/account/signup/Signup";
import { NavLayout } from "./components/navbar/navlayout/Navlayout";
import { authRoutesLoader } from "./loaders/auth.loader";
import { protectedRoutesLoader } from "./loaders/protected.loader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/signup",
        loader: authRoutesLoader,
        element: <Signup />,
      },
      {
        path: "/products",
        loader: protectedRoutesLoader,
        element: <Home />,
      },
      {
        path: "/cart",
        loader: protectedRoutesLoader,
        element: <Cart />,
      },
      {
        path: "/user",
        element: <NavLayout />,
      },
    ],
  },
]);
