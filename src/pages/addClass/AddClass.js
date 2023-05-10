import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import LogoutButton from "../../components/logoutButton/LogoutButton";
import {
  useAddClassMutation,
  useGetClassQuery,
  useUpdateClassMutation,
} from "../../features/classes/classApi";
import { selectUser } from "../../features/user/userSelectors";

const AddClass = () => {
  const { id } = useParams();
  const { email } = useSelector(selectUser);
  const navigate = useNavigate();
  // const [isIdAvailable, setIsIdAvailable] = null;

  // mutations
  const { data: singleClass } = useGetClassQuery(id);
  const [addClass, { isLoading }] = useAddClassMutation();
  const [updateClass] = useUpdateClassMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      subject: "",
      professor: "",
      schedule: "",
      room: "",
    },
  });

  useEffect(() => {
    if (id) {
      // setIsIdAvailable(false);
      setValue("subject", singleClass?.subject);
      setValue("professor", singleClass?.professor);
      setValue("schedule", singleClass?.schedule);
      setValue("room", singleClass?.room);
    }
  }, [
    id,
    // setIsIdAvailable,
    setValue,
    singleClass?.professor,
    singleClass?.room,
    singleClass?.schedule,
    singleClass?.subject,
  ]);

  const onSubmit = (data) => {
    if (id) {
      updateClass({ id: id, data: data });
    } else {
      addClass({
        ...data,
        email: email,
      });
    }
    navigate("/classes");
  };
  return (
    <div className="flex justify-center flex-col items-center">
      <LogoutButton />
      <h1 className="text-center bg-yellow-600 max-w-max px-8 py-4 rounded-md font-bold text-xl">
        Add Class
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
                name="professor"
                {...register("professor", { required: true })}
                placeholder="Professor Name"
                className="px-3 py-1 rounded-md text-gray-900"
              />
              {errors.professor?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Professor is required
                </p>
              )}
            </div>
            <div>
              <input
                name="schedule"
                {...register("schedule", { required: true })}
                placeholder="Schedule"
                className="px-3 py-1 rounded-md text-gray-900"
              />
              {errors.schedule?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Schedule is required
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
            <Button type="submit" disabled={isLoading} classNames={"px-4 py-1"}>
              {id ? "Update Class" : "Add Class"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
