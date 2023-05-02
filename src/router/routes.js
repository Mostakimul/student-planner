import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddAssignment from "../pages/addAssignment/AddAssignment";
import AddBusSchedule from "../pages/addBusSchedule/AddBusSchedule";
import AddClass from "../pages/addClass/AddClass";
import AddPresentation from "../pages/addPresentation/AddPresentation";
import Assignment from "../pages/assignment/Assignment";
import BusSchedule from "../pages/busSchedule/BusSchedule";
import Classes from "../pages/classes/Classes";
import Error from "../pages/error/Error";
import Exams from "../pages/exams/Exams";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Presentations from "../pages/presentations/Presentations";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";
import PrivateRouter from "./PrivateRouter";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "home",
        element: (
          <PrivateRouter>
            <Home />
          </PrivateRouter>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRouter>
            <Profile />
          </PrivateRouter>
        ),
      },
      {
        path: "presentation",
        element: (
          <PrivateRouter>
            <Presentations />
          </PrivateRouter>
        ),
      },
      {
        path: "exams",
        element: (
          <PrivateRouter>
            <Exams />
          </PrivateRouter>
        ),
      },
      {
        path: "classes",
        element: (
          <PrivateRouter>
            <Classes />
          </PrivateRouter>
        ),
      },
      {
        path: "bus-schedule",
        element: (
          <PrivateRouter>
            <BusSchedule />
          </PrivateRouter>
        ),
      },
      {
        path: "assignments",
        element: (
          <PrivateRouter>
            <Assignment />
          </PrivateRouter>
        ),
      },
      {
        path: "add-presentation",
        element: (
          <PrivateRouter>
            <AddPresentation />
          </PrivateRouter>
        ),
      },
      {
        path: "add-class",
        element: (
          <PrivateRouter>
            <AddClass />
          </PrivateRouter>
        ),
      },
      {
        path: "add-bus-schedule",
        element: (
          <PrivateRouter>
            <AddBusSchedule />
          </PrivateRouter>
        ),
      },
      {
        path: "add-assignment",
        element: (
          <PrivateRouter>
            <AddAssignment />
          </PrivateRouter>
        ),
      },
    ],
  },
]);
