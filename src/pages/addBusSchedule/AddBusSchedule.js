import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import LogoutButton from "../../components/logoutButton/LogoutButton";
import {
  useAddBusScheduleMutation,
  useGetBusScheduleQuery,
  useUpdateBusScheduleMutation,
} from "../../features/busSchedule/busScheduleApi";
import { selectUser } from "../../features/user/userSelectors";

const AddBusSchedule = () => {
  const { id } = useParams();
  const { email } = useSelector(selectUser);
  const navigate = useNavigate();
  const [isIdAvailable, setIsIdAvailable] = useState(true);

  // mutations
  const { data: singleBusSchedule } = useGetBusScheduleQuery(id, {
    skip: isIdAvailable,
  });
  const [addBusSchedule, { isLoading }] = useAddBusScheduleMutation();
  const [updateBusSchedule] = useUpdateBusScheduleMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      route: "",
      departureTime: "",
      notify: false,
    },
  });

  useEffect(() => {
    if (id) {
      setIsIdAvailable(false);
      setValue("route", singleBusSchedule?.route);
      setValue("departureTime", singleBusSchedule?.departureTime);
      setValue("notify", singleBusSchedule?.notify);
    }
  }, [
    id,
    setValue,
    singleBusSchedule?.departureTime,
    singleBusSchedule?.notify,
    singleBusSchedule?.route,
  ]);

  const onSubmit = (data) => {
    if (id) {
      updateBusSchedule({ id: id, data: data });
    } else {
      addBusSchedule({
        ...data,
        email: email,
      });
    }
    navigate("/bus-schedule");
  };
  return (
    <div className="flex justify-center flex-col items-center">
      <LogoutButton />
      <h1 className="text-center bg-yellow-600 max-w-max px-8 py-4 rounded-md font-bold text-xl">
        Add Bus Schedule
      </h1>
      <div className="mt-5">
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm space-y-2">
            <div>
              <input
                name="route"
                {...register("route", { required: true })}
                placeholder="Route Name"
                className="px-3 py-1 rounded-md text-gray-900"
              />
              {errors.route?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Route is required
                </p>
              )}
            </div>
            <div>
              <input
                name="departureTime"
                type="time"
                {...register("departureTime", { required: true })}
                placeholder="Departure Time"
                className="px-3 py-1 rounded-md w-full text-gray-900"
              />
              {errors.departureTime?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Departure Time is required
                </p>
              )}
            </div>

            <div className="flex items-center">
              <input
                name="notify"
                type="checkbox"
                {...register("notify")}
                className="px-3 py-1 rounded-md text-gray-900"
              />
              <label className="pl-2">Notify me</label>
            </div>
          </div>

          <div>
            <Button type="submit" disabled={isLoading} classNames={"px-4 py-1"}>
              {id ? "Update Bus Schedule" : "Add Bus Schedule"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBusSchedule;
