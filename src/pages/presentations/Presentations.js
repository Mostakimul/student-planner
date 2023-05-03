import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import LogoutButton from "../../components/logoutButton/LogoutButton";
import PresentationRow from "../../components/presentationRow/PresentationRow";

const dummyPresentation = [
  {
    id: "1",
    title: "Presentation 2",
    subject: "ENMG 652",
    deadline: moment().add(5, "days").format("MMMM Do YYYY"),
    method: "Recorded",
  },
  {
    id: "2",
    title: "Presentation 8",
    subject: "SENG 638",
    deadline: moment().add(8, "days").format("MMMM Do YYYY"),
    method: "In Person",
  },
  {
    id: "3",
    title: "Presentation 4",
    subject: "SENG 645",
    deadline: moment().add(3, "days").format("MMMM Do YYYY"),
    method: "Online",
  },
];

const Presentations = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <LogoutButton />
      <h1 className="text-center bg-yellow-600 max-w-max px-8 py-4 rounded-md font-bold text-xl">
        Presentations
      </h1>
      <div className="mt-5">
        <table className="border-separate border-spacing-2 border border-slate-500">
          <thead>
            <tr>
              <th className="border border-slate-600 p-1">Title</th>
              <th className="border border-slate-600 p-1">Subject</th>
              <th className="border border-slate-600 p-1">Deadline</th>
              <th className="border border-slate-600 p-1">Method</th>
              <th className="border border-slate-600 p-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {dummyPresentation.map((presentation) => (
              <PresentationRow key={presentation.id} data={presentation} />
            ))}
          </tbody>
        </table>

        <div className="mt-5 flex justify-end">
          <Link to={"/add-presentation"}>
            <Button classNames={`px-4 py-1`}>Add Presentation</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Presentations;
