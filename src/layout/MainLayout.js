import React from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { logout } from "../features/user/userSlice";

const MainLayout = () => {
  const dispatch = useDispatch();

  const signout = () => {
    dispatch(logout());
  };
  return (
    <div className="flex items-center h-screen text-gray-200 font-ubuntu">
      <div className="glass-bg w-3/4 mx-auto">
        <div className="w-full text-right">
          <button
            onClick={signout}
            className="bg-yellow-600 ring-1 ring-black py-1 text-black px-4 rounded-md"
          >
            Logout
          </button>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
