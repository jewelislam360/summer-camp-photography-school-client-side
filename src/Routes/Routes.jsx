import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Dashboard from "../Layouts/Dashboard";
import ManageUsers from "../Pages/Dashbord/ManageUsers/ManageUsers";
import AddAClass from "../Pages/Dashbord/Instructor/AddAClass/AddAClass";
import ManageClasses from "../Pages/Dashbord/Admin/ManageClasses/ManageClasses";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import UserSelectClass from "../Pages/Dashbord/UserSelectClass/UserSelectClass";
import Payment from "../Pages/Dashbord/Payment/Payment";
import MyEnrollClass from "../Pages/Dashbord/MyEnrollClass/MyEnrollClass";

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
        path: "/allclass",
        element: <Classes></Classes>
      },
      {
        path: "/allinstructor",
        element: <Instructors></Instructors>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      
    ]

  },
  {
    path:"dashboard",
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'manageusers',
        element:<ManageUsers></ManageUsers>
      },
      {
        path:'addaclass',
        element:<AddAClass></AddAClass>
      },
      {
        path:'myclass',
        element:<ManageUsers></ManageUsers>
      },
      {
        path:'manageclasses',
        element:<ManageClasses></ManageClasses>
      },
      {
        path:'myselectedclass',
        element:<UserSelectClass></UserSelectClass>
      },
      {
        path:'myenrollclass',
        element:<MyEnrollClass></MyEnrollClass>
      },
      {
        path:'/dashboard/payment/:id',
        element:<Payment></Payment>,
        loader: ({params})=>fetch(`http://localhost:5000/payment/${params.id}`)
        
      },

      
      
    ]
  }
]);