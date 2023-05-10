import { apiSlice } from "../api/apliSlice";

export const assignmentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addAssignment: builder.mutation({
      query: (data) => ({
        url: "/assignment",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Exams"],
    }),
    getAssignment: builder.query({
      query: (id) => ({
        url: `/assignment/${id}`,
        method: "GET",
      }),
      providesTags: ["Exam"],
    }),
    getAssignments: builder.query({
      query: (email) => ({
        url: `/assignments/${email}`,
        method: "GET",
      }),
      providesTags: ["Exams"],
    }),
    updateAssignment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/assignment/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Exams",
        { type: "Exam", id: arg.id },
      ],
    }),
    deleteAssignment: builder.mutation({
      query: (id) => ({
        url: `/assignment/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Exams"],
    }),
  }),
});

export const {
  useAddAssignmentMutation,
  useDeleteAssignmentMutation,
  useGetAssignmentQuery,
  useGetAssignmentsQuery,
  useUpdateAssignmentMutation,
} = assignmentApi;
