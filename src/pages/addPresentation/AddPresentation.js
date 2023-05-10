import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import LogoutButton from "../../components/logoutButton/LogoutButton";
import {
  useAddPresentationMutation,
  useGetPresentationQuery,
  useUpdatePresentationMutation,
} from "../../features/presentations/presentationApi";
import { selectUser } from "../../features/user/userSelectors";

const AddPresentation = () => {
  const { id } = useParams();
  const { email } = useSelector(selectUser);
  const navigate = useNavigate();
  const [isIdAvailable, setIsIdAvailable] = useState(true);

  // mutations
  const { data: singlePresentation } = useGetPresentationQuery(id, {
    skip: isIdAvailable,
  });
  const [addPresentation, { isLoading }] = useAddPresentationMutation();
  const [updatedPresentation] = useUpdatePresentationMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      title: "",
      subject: "",
      deadline: "",
      method: "",
    },
  });

  useEffect(() => {
    if (id) {
      setIsIdAvailable(false);
      setValue("title", singlePresentation?.title);
      setValue("subject", singlePresentation?.subject);
      setValue("deadline", singlePresentation?.deadline);
      setValue("method", singlePresentation?.method);
    }
  }, [
    id,
    setValue,
    singlePresentation?.deadline,
    singlePresentation?.method,
    singlePresentation?.subject,
    singlePresentation?.title,
  ]);

  const onSubmit = (data) => {
    if (id) {
      updatedPresentation({ id: id, data: data });
    } else {
      addPresentation({
        ...data,
        email: email,
      });
    }
    navigate("/presentation");
  };
  return (
    <div className="flex justify-center flex-col items-center">
      <LogoutButton />
      <h1 className="text-center bg-yellow-600 max-w-max px-8 py-4 rounded-md font-bold text-xl">
        Add Presentations
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
                name="method"
                {...register("method", { required: true })}
                placeholder="Method"
                className="px-3 py-1 rounded-md text-gray-900"
              />
              {errors.method?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Method is required
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
              {id ? "Update Presentation" : "Add Presentation"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPresentation;
