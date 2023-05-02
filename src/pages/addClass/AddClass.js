import React from "react";
import LogoutButton from "../../components/logoutButton/LogoutButton";

const AddClass = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <LogoutButton />
      <h1 className="text-center bg-yellow-600 max-w-max px-8 py-4 rounded-md font-bold text-xl">
        Add Class
      </h1>
      <div className="mt-5">inputs goes here</div>
    </div>
  );
};

export default AddClass;
