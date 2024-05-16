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
        path: "/addServices",
        element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
      },
      {
        path: "/allServices",
        element: <AllServices></AllServices>
      },
      {
        path: "/serviceDetails",
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '*',
        element: <Error></Error>
      }
    ],
  },
]);

export default router;
