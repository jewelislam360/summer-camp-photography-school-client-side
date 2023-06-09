import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRouts from "./PrivetRouts";
import Secret from "../Pages/Shared/Secret/Secret";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Dashboard from "../Layouts/Dashboard";
import ManageUsers from "../Pages/Dashbord/ManageUsers/ManageUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/secret",
        element: <PrivetRouts><Secret></Secret></PrivetRouts>
      }
    ]

  },
  {
    path:"/dashboard",
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'manageusers',
        element:<ManageUsers></ManageUsers>
      }
    ]
  }
]);