import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/button/Button";
import LogoutButton from "../../components/logoutButton/LogoutButton";

const AddAssignment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      subject: "",
      deadline: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Data => ", data);
  };
  return (
    <div className="flex justify-center flex-col items-center">
      <LogoutButton />
      <h1 className="text-center bg-yellow-600 max-w-max px-8 py-4 rounded-md font-bold text-xl">
        Add Assignment
      </h1>
      <div className="mt-5">
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm space-y-2">
            <div>
              <input
                name="title"
                {...register("title", { required: true })}
                placeholder="Title"
                className="px-3 py-1 rounded-md text-gray-900"
              />
              {errors.title?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Title is required
                </p>
              )}
            </div>
            <div>
              <input
                name="subject"
                {...register("subject", { required: true })}
                placeholder="Subject Name"
                className="px-3 py-1 rounded-md text-gray-900"
              />
              {errors.subject?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Subject is required
                </p>
              )}
            </div>

            <div>
              <input
                name="deadline"
                type="date"
                {...register("deadline", { required: true })}
                placeholder="Deadline"
                className="px-3 py-1 w-full rounded-md text-gray-900"
              />
              {errors.deadline?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Deadline is required
                </p>
              )}
            </div>
            <div>
              <input
                name="room"
                {...register("room", { required: true })}
                placeholder="Room number"
                className="px-3 py-1 rounded-md text-gray-900"
              />
              {errors.room?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Room number is required
                </p>
              )}
            </div>
          </div>

          <div>
            <Button
              type="submit"
              // disabled={isLoading || AisLoading}
              classNames={"px-4 py-1"}
            >
              Add Class
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAssignment;
