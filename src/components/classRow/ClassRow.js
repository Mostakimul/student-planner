import React from "react";
import Button from "../button/Button";

const ClassRow = ({ data }) => {
  const { id, subject, professor, schedule, room } = data;

  const editHandler = (id) => {
    console.log("Edit class ", id);
  };
  const deleteClass = (id) => {
    console.log("Delete class", id);
  };

  return (
    <tr>
      <td className="border border-slate-600 p-1">{subject}</td>
      <td className="border border-slate-600 p-1">{professor}</td>
      <td className="border border-slate-600 p-1">{schedule}</td>
      <td className="border border-slate-600 p-1">{room}</td>
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

export default ClassRow;
