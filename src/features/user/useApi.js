import { apiSlice } from "../api/apliSlice";
import { login } from "./userSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        headers: { authorization: `Bearer ${data.accessToken}` },
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log("result", result);
          localStorage.setItem(
            "auth",
            JSON.stringify({
              // accessTken: 'test',
              user: {
                name: arg.name,
                email: arg.email,
                university: arg.university,
              },
            })
          );

          dispatch(
            login({
              name: arg.name,
              email: arg.email,
              university: arg.university,
            })
          );
        } catch (err) {}
      },
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log("Result");
          localStorage.setItem(
            "auth",
            JSON.stringify({
              user: {
                name: result.data.name,
                email: result.data.email,
                university: result.data.university,
              },
            })
          );

          dispatch(
            login({
              name: result.data.name,
              email: result.data.email,
              university: result.data.university,
            })
          );
        } catch (err) {}
      },
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = userApi;
