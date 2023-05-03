import moment from "moment/moment";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import ExamRow from "../../components/examRow/ExamRow";
import LogoutButton from "../../components/logoutButton/LogoutButton";

const dummyExams = [
  {
    id: "1",
    subject: "ENMG 652",
    type: "Final Exam",
    date: moment().add(1, "days").format("MMMM Do YYYY"),
    room: "412",
    method: "Online",
  },
  {
    id: "2",
    subject: "SENG 645",
    type: "Final Exam",
    date: moment().add(5, "days").format("MMMM Do YYYY"),
    room: "422",
    method: "Offline",
  },
  {
    id: "3",
    subject: "SENG 638",
    type: "Final Exam",
    date: moment().add(10, "days").format("MMMM Do YYYY"),
    room: "432",
    method: "Offline",
  },
];

const Exams = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <LogoutButton />
      <h1 className="text-center bg-yellow-600 max-w-max px-8 py-4 rounded-md font-bold text-xl">
        Exams
      </h1>
      <div className="mt-5">
        <table className="border-separate border-spacing-2 border border-slate-500">
          <thead>
            <tr>
              <th className="border border-slate-600 p-1">Subject</th>
              <th className="border border-slate-600 p-1">Type</th>
              <th className="border border-slate-600 p-1">Date</th>
              <th className="border border-slate-600 p-1">Room</th>
              <th className="border border-slate-600 p-1">Method</th>
              <th className="border border-slate-600 p-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {dummyExams.map((exam) => (
              <ExamRow key={exam.id} data={exam} />
            ))}
          </tbody>
        </table>

        <div className="mt-5 flex justify-end">
          <Link to={"/add-exam"}>
            <Button classNames={`px-4 py-1`}>Add Exam</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Exams;
