import moment from "moment/moment";
import React from "react";
import { Link } from "react-router-dom";
import AssignmentRow from "../../components/assignmentRow/AssignmentRow";
import Button from "../../components/button/Button";
import LogoutButton from "../../components/logoutButton/LogoutButton";

const dummyAssignment = [
  {
    id: "1",
    title: "Home work 2",
    subject: "ENMG 652",
    deadline: moment().add(5, "days").format("MMMM Do YYYY"),
  },
  {
    id: "2",
    title: "Home work 10",
    subject: "SENG 638",
    deadline: moment().add(8, "days").format("MMMM Do YYYY"),
  },
  {
    id: "3",
    title: "Home work 9",
    subject: "SENG 645",
    deadline: moment().add(3, "days").format("MMMM Do YYYY"),
  },
];

const Assignment = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <LogoutButton />
      <h1 className="text-center bg-yellow-600 max-w-max px-8 py-4 rounded-md font-bold text-xl">
        Assignments
      </h1>
      <div className="mt-5">
        <table className="border-separate border-spacing-2 border border-slate-500">
          <thead>
            <tr>
              <th className="border border-slate-600 p-1">Title</th>
              <th className="border border-slate-600 p-1">Subject</th>
              <th className="border border-slate-600 p-1">Deadline</th>
              <th className="border border-slate-600 p-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {dummyAssignment.map((assignment) => (
              <AssignmentRow key={assignment.id} data={assignment} />
            ))}
          </tbody>
        </table>

        <div className="mt-5 flex justify-end">
          <Link to={"/add-assignment"}>
            <Button classNames={`px-4 py-1`}>Add Assignment</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
