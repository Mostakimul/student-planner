import React from 'react';

const Home = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-center bg-yellow-600 max-w-max px-8 py-4 rounded-md font-bold text-xl">
        Home
      </h1>
      <div className="mt-5">
        <div className="grid grid-cols-2 w-full gap-2">
          <div className="bg-gray-200 w-full h-full text-black px-4 py-2 rounded-md">
            Profile
          </div>
          <div className="bg-gray-200 w-full h-full text-black px-4 py-2 rounded-md">
            Classes
          </div>
          <div className="bg-gray-200 w-full h-full text-black px-4 py-2 rounded-md">
            Exams
          </div>
          <div className="bg-gray-200 w-full h-full text-black px-4 py-2 rounded-md">
            Assignments
          </div>
          <div className="bg-gray-200 w-full h-full text-black px-4 py-2 rounded-md">
          Presentation
          </div>
          <div className="bg-gray-200 w-full h-full text-black px-4 py-2 rounded-md">
            Bus Schedule
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
