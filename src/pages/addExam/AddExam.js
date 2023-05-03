import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/button/Button";
import LogoutButton from "../../components/logoutButton/LogoutButton";

const AddExam = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      subject: "",
      type: "",
      date: "",
      room: "",
      method: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Data => ", data);
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <LogoutButton />
      <h1 className="text-center bg-yellow-600 max-w-max px-8 py-4 rounded-md font-bold text-xl">
        Add Exam
      </h1>

      <div className="mt-5">
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm space-y-2">
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
                name="type"
                {...register("type", { required: true })}
                placeholder="Type"
                className="px-3 py-1 rounded-md text-gray-900"
              />
              {errors.type?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Type is required
                </p>
              )}
            </div>
            <div>
              <input
                name="date"
                {...register("date", { required: true })}
                placeholder="Date"
                className="px-3 py-1 rounded-md text-gray-900"
              />
              {errors.date?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Date is required
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
            <div>
              <input
                name="method"
                {...register("method", { required: true })}
                placeholder="Method number"
                className="px-3 py-1 rounded-md text-gray-900"
              />
              {errors.method?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Method number is required
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
              Add Exam
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExam;
