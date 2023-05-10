import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Error from "../../components/error/Error";
import ExamRow from "../../components/examRow/ExamRow";
import LogoutButton from "../../components/logoutButton/LogoutButton";
import { useGetExamsQuery } from "../../features/exams/examApi";
import { selectUser } from "../../features/user/userSelectors";

const Exams = () => {
  const { email } = useSelector(selectUser);

  const { data: exams, isError, isLoading, error } = useGetExamsQuery(email);

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
  } else if (!isLoading && !isError && exams?.length === 0) {
    content = (
      <tr>
        <td className="m-2 text-center">No exams found!</td>
      </tr>
    );
  } else if (!isLoading && !isError && exams?.length > 0) {
    content = exams.map((exam) => <ExamRow key={exam._id} data={exam} />);
  }

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
          <tbody>{content}</tbody>
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
