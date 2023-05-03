import React from "react";
import { useSelector } from "react-redux";
import Button from "../../components/button/Button";
import LogoutButton from "../../components/logoutButton/LogoutButton";
import { selectUser } from "../../features/user/userSelectors";

const Profile = () => {
  const { displayName, email } = useSelector(selectUser);

  const handleEditProfile = () => {
    console.log("Edit profile cliked");
  };
  const handleChangePassword = () => {
    console.log("handleChangePassword");
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <LogoutButton />
      <h1 className="text-center bg-yellow-600 max-w-max px-8 py-4 rounded-md font-bold text-xl">
        Profile
      </h1>
      <div className="mt-5">
        {/* field */}
        <div className="flex items-center ">
          <div className="bg-yellow-600 px-2 py-1 text-black">Name</div>
          <p className="bg-white px-2 py-1 text-black w-full">{displayName}</p>
        </div>
        <div className="flex items-center mt-5">
          <div className="bg-yellow-600 px-2 py-1 text-black">Email</div>
          <p className="bg-white px-2 py-1 text-black w-full">{email}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-5 flex space-y-2 flex-col">
        <Button
          classNames={"bg-yellow-600 py-2 px-4"}
          clikHandler={handleEditProfile}
        >
          Edit Profile
        </Button>
        <Button
          classNames={"bg-yellow-600 py-2 px-4"}
          clikHandler={handleChangePassword}
        >
          Change Password
        </Button>
      </div>
    </div>
  );
};

export default Profile;
