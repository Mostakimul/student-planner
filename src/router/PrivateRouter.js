import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectUser } from "../features/user/userSelectors";

const PrivateRouter = ({ children }) => {
  const user = useSelector(selectUser);
  const location = useLocation();
  if (user) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
};

export default PrivateRouter;
