import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import ClassRow from "../../components/classRow/ClassRow";
import LogoutButton from "../../components/logoutButton/LogoutButton";

const dummyClass = [
  {
    id: "1",
    subject: "ENMG 652",
    professor: "Chris Hauge",
    schedule: "7:00 pm to 9:30 pm",
    room: "412",
  },
  {
    id: "2",
    subject: "SENG 638",
    professor: "Dr. Mohammad Samarah",
    schedule: "4:30 pm to 7:00 pm",
    room: "422",
  },
  {
    id: "3",
    subject: "SENG 645",
    professor: "Dr. Mohammad Samarah",
    schedule: "4:30 pm to 7:00 pm",
    room: "421",
  },
];

const Classes = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <LogoutButton />
      <h1 className="text-center bg-yellow-600 max-w-max px-8 py-4 rounded-md font-bold text-xl">
        Classes
      </h1>
      <div className="mt-5">
        <table className="border-separate border-spacing-2 border border-slate-500">
          <thead>
            <tr>
              <th className="border border-slate-600 p-1">Subject</th>
              <th className="border border-slate-600 p-1">Professor</th>
              <th className="border border-slate-600 p-1">Schedule</th>
              <th className="border border-slate-600 p-1">Room</th>
              <th className="border border-slate-600 p-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {dummyClass.map((myClass) => (
              <ClassRow key={myClass.id} data={myClass} />
            ))}
          </tbody>
        </table>

        <div className="mt-5 flex justify-end">
          <Link to={"/add-class"}>
            <Button classNames={`px-4 py-1`}>Add Class</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Classes;
