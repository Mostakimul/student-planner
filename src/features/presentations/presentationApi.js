import { apiSlice } from "../api/apliSlice";

export const presentationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addPresentation: builder.mutation({
      query: (data) => ({
        url: "/presentation",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Presentations"],
    }),
    getPresentation: builder.query({
      query: (id) => ({
        url: `/presentation/${id}`,
        method: "GET",
      }),
      providesTags: ["Presentation"],
    }),
    getPresentations: builder.query({
      query: (email) => ({
        url: `/presentations/${email}`,
        method: "GET",
      }),
      providesTags: ["Presentations"],
    }),
    updatePresentation: builder.mutation({
      query: ({ id, data }) => ({
        url: `/presentation/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Presentations",
        { type: "Presentation", id: arg.id },
      ],
    }),
    deletePresentation: builder.mutation({
      query: (id) => ({
        url: `/presentation/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Presentations"],
    }),
  }),
});

export const {
  useAddPresentationMutation,
  useDeletePresentationMutation,
  useGetPresentationQuery,
  useGetPresentationsQuery,
  useUpdatePresentationMutation,
} = presentationApi;
