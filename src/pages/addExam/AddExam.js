import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import LogoutButton from "../../components/logoutButton/LogoutButton";
import {
  useAddExamMutation,
  useGetExamQuery,
  useUpdateExamMutation,
} from "../../features/exams/examApi";
import { selectUser } from "../../features/user/userSelectors";

const AddExam = () => {
  const { id } = useParams();
  const { email } = useSelector(selectUser);
  const navigate = useNavigate();
  const [isIdAvailable, setIsIdAvailable] = useState(true);

  // mutations
  const { data: singleExam } = useGetExamQuery(id, {
    skip: isIdAvailable,
  });
  const [addExam, { isLoading }] = useAddExamMutation();
  const [updateExam] = useUpdateExamMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      subject: "",
      type: "",
      date: "",
      room: "",
      method: "",
    },
  });

  useEffect(() => {
    if (id) {
      setIsIdAvailable(false);
      setValue("subject", singleExam?.subject);
      setValue("type", singleExam?.type);
      setValue("date", singleExam?.date);
      setValue("room", singleExam?.room);
      setValue("method", singleExam?.method);
    }
  }, [
    id,
    setValue,
    singleExam?.date,
    singleExam?.method,
    singleExam?.room,
    singleExam?.subject,
    singleExam?.type,
  ]);

  const onSubmit = (data) => {
    if (id) {
      updateExam({ id: id, data: data });
    } else {
      addExam({
        ...data,
        email: email,
      });
    }
    navigate("/exams");
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
                type="date"
                {...register("date", { required: true })}
                placeholder="Date"
                className="px-3 py-1 w-full rounded-md text-gray-900"
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
            <Button type="submit" disabled={isLoading} classNames={"px-4 py-1"}>
              {id ? "Update Exam" : "Add Exam"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExam;
