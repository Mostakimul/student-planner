import React from "react";
import { FcCancel, FcCheckmark } from "react-icons/fc";
import Button from "../button/Button";

const BusScheduleRow = ({ data }) => {
  const { id, route, departureTime, notifyMe } = data;

  const editHandler = (id) => {
    console.log("Edit class ", id);
  };
  const deleteClass = (id) => {
    console.log("Delete class", id);
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
          clikHandler={() => editHandler(id)}
          classNames={"bg-blue-600 py-1 px-4"}
        >
          Edit
        </Button>
        <Button
          clikHandler={() => deleteClass(id)}
          classNames={"bg-red-600 py-1 px-4"}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default BusScheduleRow;
