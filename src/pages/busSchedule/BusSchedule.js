import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import BusScheduleRow from "../../components/busScheduleRow/BusScheduleRow";
import Button from "../../components/button/Button";
import LogoutButton from "../../components/logoutButton/LogoutButton";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSelectors";
import { useGetBusSchedulesQuery } from "../../features/busSchedule/busScheduleApi";
import Error from "../../components/error/Error";

const dummyBusSchedule = [
  {
    id: "1",
    route: "sample route",
    departureTime: moment().add(3, "days").calendar(),
    notifyMe: true,
  },
  {
    id: "2",
    route: "sample route 2",
    departureTime: moment().add(3, "days").calendar(),
    notifyMe: false,
  },
];

const BusSchedule = () => {
  const { email } = useSelector(selectUser);

  const {
    data: busSchedules,
    isError,
    isLoading,
    error,
  } = useGetBusSchedulesQuery(email);

  let content = null;

  if (isLoading) {
    content = (
      <tr>
        <td className="m-2 text-center">Loading...</td>
      </tr>
    );
  } else if (!isLoading && isError) {
    content = (
      <tr>
        <td className="m-2 text-center">
          <Error message={error?.data} />
        </td>
      </tr>
    );
  } else if (!isLoading && !isError && busSchedules?.length === 0) {
    content = (
      <tr>
        <td className="m-2 text-center">No Bus Schedule found!</td>
      </tr>
    );
  } else if (!isLoading && !isError && busSchedules?.length > 0) {
    content = busSchedules.map((mySchedule) => (
      <BusScheduleRow key={mySchedule._id} data={mySchedule} />
    ));
  }
  return (
    <div className="flex justify-center flex-col items-center">
      <LogoutButton />
      <h1 className="text-center bg-yellow-600 max-w-max px-8 py-4 rounded-md font-bold text-xl">
        Bus Schedule
      </h1>
      <div className="mt-5">
        <table className="border-separate border-spacing-2 border border-slate-500">
          <thead>
            <tr>
              <th className="border border-slate-600 p-1">Route</th>
              <th className="border border-slate-600 p-1">Departure Time</th>
              <th className="border border-slate-600 p-1">Notify</th>
              <th className="border border-slate-600 p-1">Action</th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </table>

        <div className="mt-5 flex justify-end">
          <Link to={"/add-bus-schedule"}>
            <Button classNames={`px-4 py-1`}>Add Bus Schedule</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusSchedule;
