import { apiSlice } from "../api/apliSlice";

export const busScheduleApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addBusSchedule: builder.mutation({
      query: (data) => ({
        url: "/busSchedule",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["BusSchedules"],
    }),
    getBusSchedule: builder.query({
      query: (id) => ({
        url: `/busSchedule/${id}`,
        method: "GET",
      }),
      providesTags: ["BusSchedule"],
    }),
    getBusSchedules: builder.query({
      query: (email) => ({
        url: `/busSchedules/${email}`,
        method: "GET",
      }),
      providesTags: ["BusSchedules"],
    }),
    updateBusSchedule: builder.mutation({
      query: ({ id, data }) => ({
        url: `/busSchedule/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "BusSchedules",
        { type: "BusSchedule", id: arg.id },
      ],
    }),
    deleteBusSchedule: builder.mutation({
      query: (id) => ({
        url: `/busSchedule/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["BusSchedules"],
    }),
  }),
});

export const {
  useAddBusScheduleMutation,
  useDeleteBusScheduleMutation,
  useGetBusScheduleQuery,
  useGetBusSchedulesQuery,
  useUpdateBusScheduleMutation,
} = busScheduleApi;
