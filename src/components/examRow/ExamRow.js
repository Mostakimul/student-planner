import React from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteExamMutation } from "../../features/exams/examApi";
import Button from "../button/Button";

const ExamRow = ({ data }) => {
  const { _id, subject, type, date, room, method } = data;
  const navigate = useNavigate();
  const [deleteExam] = useDeleteExamMutation();

  const editHandler = (id) => {
    navigate(`/edit-exam/${id}`);
  };
  const deleteClass = (id) => {
    deleteExam(id);
  };

  return (
    <tr>
      <td className="border border-slate-600 p-1">{subject}</td>
      <td className="border border-slate-600 p-1">{type}</td>
      <td className="border border-slate-600 p-1">{date}</td>
      <td className="border border-slate-600 p-1">{room}</td>
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

export default ExamRow;
