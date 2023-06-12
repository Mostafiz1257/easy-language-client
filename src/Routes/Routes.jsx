import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Instractor from "../Pages/Instractor/Instractor/Instractor";
import AllClasses from "../Pages/AllClasses/AllClasses";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";
import DashBoard from "../Layout/DashBoard";
import MySelectedClass from "../Pages/DashBoard/MySelectedClass";
import EnrollClass from "../Pages/DashBoard/EnrollClass";
import AllStudent from "../Pages/DashBoard/AllStudent/AllStudent";
import Welcome from "../Pages/DashBoard/Welcome/Welcome";
import AddClass from "../Pages/DashBoard/AddClass/AddClass";
import MyClass from "../Pages/DashBoard/MyClass/MyClass";
import TotalClass from "../Pages/DashBoard/TotalClass/TotalClass";
import Payment from "../Pages/DashBoard/Payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/instructor',
        element: <Instractor></Instractor>
      },
      {
        path: 'allClasses',
        element: <AllClasses></AllClasses>
      },
      {
        path: "allInstructors",
        element: <AllInstructors></AllInstructors>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }

    ]
  },
  {
    path: 'dashboard',
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: 'welcome',
        element: <Welcome></Welcome>
      },
      {
        path: 'selectedClass',
        element: <MySelectedClass></MySelectedClass>
      },
      {
        path: 'enroll',
        element: <EnrollClass></EnrollClass>
      },
      {
        path: 'allUsers',
        element: <AllStudent></AllStudent>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'addClass',
        element: <AddClass></AddClass>
      },
      {
        path: 'myClass',
        element: <MyClass></MyClass>
      },
      {
        path: "totalClass",
        element: <TotalClass></TotalClass>
      }
    ]
  }
]);