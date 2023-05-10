import { apiSlice } from "../api/apliSlice";

export const classApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addClass: builder.mutation({
      query: (data) => ({
        url: "/addClass",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Classe"],
    }),
    getClass: builder.query({
      query: (id) => ({
        url: `/class/${id}`,
        method: "GET",
      }),
      providesTags: ["Class"],
    }),
    getClasses: builder.query({
      query: (email) => ({
        url: `/classes/${email}`,
        method: "GET",
      }),
      providesTags: ["Classes"],
    }),
    updateClass: builder.mutation({
      query: ({ id, data }) => ({
        url: `/class/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Classes",
        { type: "Class", id: arg.id },
      ],
    }),
    deleteClass: builder.mutation({
      query: (id) => ({
        url: `/class/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Classes"],
    }),
  }),
});

export const {
  useAddClassMutation,
  useGetClassesQuery,
  useDeleteClassMutation,
  useUpdateClassMutation,
  useGetClassQuery,
} = classApi;
