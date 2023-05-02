import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRouter from "./PrivateRouter";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "home",
        element: (
          <PrivateRouter>
            <Home />
          </PrivateRouter>
          
          
          
        ),

      },
    ],
  },
]);
