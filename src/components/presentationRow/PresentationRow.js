import React from "react";
import { useNavigate } from "react-router-dom";
import { useDeletePresentationMutation } from "../../features/presentations/presentationApi";
import Button from "../button/Button";

const PresentationRow = ({ data }) => {
  const { _id, title, subject, deadline, method } = data;
  const [deletePresentation] = useDeletePresentationMutation();
  const navigate = useNavigate();

  const editHandler = (id) => {
    navigate(`/edit-presentation/${id}`);
  };
  const deleteClass = (id) => {
    deletePresentation(id);
  };
  return (
    <tr>
      <td className="border border-slate-600 p-1">{title}</td>
      <td className="border border-slate-600 p-1">{subject}</td>
      <td className="border border-slate-600 p-1">{deadline}</td>
      <td className="border border-slate-600 p-1">{method}</td>
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

export default PresentationRow;
