import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import ClassRow from "../../components/classRow/ClassRow";
import Error from "../../components/error/Error";
import LogoutButton from "../../components/logoutButton/LogoutButton";
import { useGetClassesQuery } from "../../features/classes/classApi";
import { selectUser } from "../../features/user/userSelectors";

const Classes = () => {
  const { email } = useSelector(selectUser);

  const {
    data: classes,
    isError,
    isLoading,
    error,
  } = useGetClassesQuery(email);

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
  } else if (!isLoading && !isError && classes?.length === 0) {
    content = (
      <tr>
        <td className="m-2 text-center">No class found!</td>
      </tr>
    );
  } else if (!isLoading && !isError && classes?.length > 0) {
    content = classes.map((myClass) => (
      <ClassRow key={myClass._id} data={myClass} />
    ));
  }

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
          <tbody>{content}</tbody>
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
