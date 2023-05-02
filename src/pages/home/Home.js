import React from "react";
import { Link } from "react-router-dom";
import Bus from "../../assets/Icons/bus.png";
import ClassRoom from "../../assets/Icons/class.png";
import Contract from "../../assets/Icons/contract.png";
import Exam from "../../assets/Icons/exam.png";
import Presentation from "../../assets/Icons/presentation.png";
import User from "../../assets/Icons/user.png";

const Home = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-center bg-yellow-600 max-w-max px-8 py-4 rounded-md font-bold text-xl">
        Home
      </h1>
      <div className="mt-5">
        <div className="grid grid-cols-2 w-full gap-2">
          <div className="bg-gray-200 w-full h-full text-black px-4 py-2 rounded-md">
            <Link
              to={"/profile"}
              className="flex flex-col justify-center items-center"
            >
              <img src={User} alt="profile" className="w-12" />
              <p>Profile</p>
            </Link>
          </div>
          <div className="bg-gray-200 w-full h-full text-black px-4 py-2 rounded-md">
            <Link
              to={"/classes"}
              className="flex flex-col justify-center items-center"
            >
              <img src={ClassRoom} alt="class" className="w-12" />
              <p>Classes</p>
            </Link>
          </div>
          <div className="bg-gray-200 w-full h-full text-black px-4 py-2 rounded-md">
            <Link
              to={"/exams"}
              className="flex flex-col justify-center items-center"
            >
              <img src={Exam} alt="exam" className="w-12" />
              <p>Exams</p>
            </Link>
          </div>
          <div className="bg-gray-200 w-full h-full text-black px-4 py-2 rounded-md">
            <Link
              to={"/assignments"}
              className="flex flex-col justify-center items-center"
            >
              <img src={Contract} alt="assignments" className="w-12" />
              <p>Assignments</p>
            </Link>
          </div>
          <div className="bg-gray-200 w-full h-full text-black px-4 py-2 rounded-md">
            <Link
              to={"/presentation"}
              className="flex flex-col justify-center items-center"
            >
              <img src={Presentation} alt="presentation" className="w-12" />
              <p>Presentation</p>
            </Link>
          </div>
          <div className="bg-gray-200 w-full h-full text-black px-4 py-2 rounded-md">
            <Link
              to={"/bus-schedule"}
              className="flex flex-col justify-center items-center"
            >
              <img src={Bus} alt="bus" className="w-12" />
              <p>Bus Schedule</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
