import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";
import PrivateRoute from "./PrivateRoute";
import AddServices from "../Pages/Add a Services/AddServices";
import AllServices from "../Pages/All Services/AllServices";
import ServiceDetails from "../Pages/Service Details/ServiceDetails";
import ManageServices from "../Pages/Manage Services/ManageServices";
import BookedService from "../Pages/Booked Service/BookedService";
import ServiceToDo from "../Pages/Service To Do/ServiceToDo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allServices",
        element: <AllServices></AllServices>,
      },
      {
        path: "/addServices",
        element: <PrivateRoute><AddServices></AddServices></PrivateRoute>,
      },
      {
        path: "/serviceDetails",
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
      },
      {
        path: "/manageServices",
        element: <PrivateRoute><ManageServices></ManageServices></PrivateRoute>,
      },
      {
        path: "/bookedService",
        element: <PrivateRoute><BookedService></BookedService></PrivateRoute>,
      },
      {
        path: "/ServiceToDo",
        element: <PrivateRoute><ServiceToDo></ServiceToDo></PrivateRoute>,
      },
      {
        path: '*',
        element: <Error></Error>
      }
    ],
  },
]);

export default router;
