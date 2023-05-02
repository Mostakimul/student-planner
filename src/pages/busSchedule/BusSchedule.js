import React from "react";
import LogoutButton from "../../components/logoutButton/LogoutButton";

const BusSchedule = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <LogoutButton />
      <h1 className="text-center bg-yellow-600 max-w-max px-8 py-4 rounded-md font-bold text-xl">
        Bus Schedule
      </h1>
      <div className="mt-5">Bus Schedule table goes here</div>
    </div>
  );
};

export default BusSchedule;
