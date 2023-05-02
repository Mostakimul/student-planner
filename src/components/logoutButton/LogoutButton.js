import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/user/userSlice";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const signout = () => {
    dispatch(logout());
  };

  return (
    <div className="w-full text-right">
      <button
        onClick={signout}
        className="bg-yellow-600 ring-1 ring-black py-1 text-black px-4 rounded-md"
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
