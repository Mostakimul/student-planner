import { apiSlice } from "../api/apliSlice";

export const examApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addExam: builder.mutation({
      query: (data) => ({
        url: "/exam",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Exams"],
    }),
    getExam: builder.query({
      query: (id) => ({
        url: `/exam/${id}`,
        method: "GET",
      }),
      providesTags: ["Exam"],
    }),
    getExams: builder.query({
      query: (email) => ({
        url: `/exams/${email}`,
        method: "GET",
      }),
      providesTags: ["Exams"],
    }),
    updateExam: builder.mutation({
      query: ({ id, data }) => ({
        url: `/exam/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Exams",
        { type: "Exam", id: arg.id },
      ],
    }),
    deleteExam: builder.mutation({
      query: (id) => ({
        url: `/exam/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Exams"],
    }),
  }),
});

export const {
  useAddExamMutation,
  useDeleteExamMutation,
  useGetExamQuery,
  useGetExamsQuery,
  useUpdateExamMutation,
} = examApi;
