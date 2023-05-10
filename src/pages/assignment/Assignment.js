import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AssignmentRow from "../../components/assignmentRow/AssignmentRow";
import Button from "../../components/button/Button";
import Error from "../../components/error/Error";
import LogoutButton from "../../components/logoutButton/LogoutButton";
import { useGetAssignmentsQuery } from "../../features/assignments/assignmentApi";
import { selectUser } from "../../features/user/userSelectors";

const Assignment = () => {
  const { email } = useSelector(selectUser);

  const {
    data: assignments,
    isError,
    isLoading,
    error,
  } = useGetAssignmentsQuery(email);

  let content = null;

  if (isLoading) {
    content = (
      <tr>
        <td className="m-2 text-center">Loading...</td>
      </tr>
    );
  } else if (!isLoading && isError) {
    content = (
      <tr>
        <td className="m-2 text-center">
          <Error message={error?.data} />
        </td>
      </tr>
    );
  } else if (!isLoading && !isError && assignments?.length === 0) {
    content = (
      <tr>
        <td className="m-2 text-center">No assignment found!</td>
      </tr>
    );
  } else if (!isLoading && !isError && assignments?.length > 0) {
    content = assignments.map((assignment) => (
      <AssignmentRow key={assignment._id} data={assignment} />
    ));
  }
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
          <tbody>{content}</tbody>
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
