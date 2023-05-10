import React from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteAssignmentMutation } from "../../features/assignments/assignmentApi";
import Button from "../button/Button";

const AssignmentRow = ({ data }) => {
  const { _id, title, subject, deadline } = data;
  const [deleteAssignment] = useDeleteAssignmentMutation();
  const navigate = useNavigate();

  const editHandler = (id) => {
    navigate(`/edit-assignment/${id}`);
  };
  const deleteClass = (id) => {
    deleteAssignment(id);
  };
  return (
    <tr>
      <td className="border border-slate-600 p-1">{title}</td>
      <td className="border border-slate-600 p-1">{subject}</td>
      <td className="border border-slate-600 p-1">{deadline}</td>
      <td className="border border-slate-600 p-1 space-x-3">
        <Button
          clikHandler={() => editHandler(_id)}
          classNames={"bg-blue-600 py-1 px-4"}
        >
          Edit
        </Button>
        <Button
          clikHandler={() => deleteClass(_id)}
          classNames={"bg-red-600 py-1 px-4"}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default AssignmentRow;
