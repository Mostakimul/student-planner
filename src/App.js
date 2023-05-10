import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "./features/user/userSlice";
import { routes } from "./router/routes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem("auth");
    const parsedItem = JSON.parse(user);
    // console.log('user: ', parsedItem?.user);
    dispatch(login(parsedItem?.user));
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer />
    </>
  );
}

export default App;
