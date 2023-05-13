import React from "react";
import { FcCancel, FcCheckmark } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useDeleteBusScheduleMutation } from "../../features/busSchedule/busScheduleApi";
import Button from "../button/Button";

const BusScheduleRow = ({ data }) => {
  const { _id, route, departureTime, notifyMe } = data;
  const [deleteBusSchedule] = useDeleteBusScheduleMutation();
  const navigate = useNavigate();

  const editHandler = (id) => {
    navigate(`/edit-bus-schedule/${id}`);
  };
  const deleteHandler = (id) => {
    deleteBusSchedule(id);
  };
  return (
    <tr>
      <td className="border border-slate-600 p-1">{route}</td>
      <td className="border border-slate-600 p-1">{departureTime}</td>
      <td className="border border-slate-600 p-1">
        {notifyMe ? <FcCheckmark /> : <FcCancel />}
      </td>
      <td className="border border-slate-600 p-1 space-x-3">
        <Button
          clikHandler={() => editHandler(_id)}
          classNames={"bg-blue-600 py-1 px-4"}
        >
          Edit
        </Button>
        <Button
          clikHandler={() => deleteHandler(_id)}
          classNames={"bg-red-600 py-1 px-4"}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default BusScheduleRow;
