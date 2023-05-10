import { apiSlice } from "../api/apliSlice";

export const classApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addClass: builder.mutation({
      query: (data) => ({
        url: "/addClass",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Classes"],
    }),
    getClasses: builder.query({
      query: (email) => ({
        url: `/classes/${email}`,
        method: "GET",
      }),
      providesTags: ["Classes"],
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
} = classApi;
