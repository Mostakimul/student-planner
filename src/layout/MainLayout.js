import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex items-center h-screen text-gray-200 font-ubuntu">
      <div className="glass-bg w-3/4 mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
