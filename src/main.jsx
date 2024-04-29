import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "../public/layout/Root";
import Home from "./components/Home";
import AddCraft from "./components/AddCraft";
import AllCraft from "./components/AllCraft";
// import Singup from "./pages/login/Singup";
import Login from "./pages/login/Login";
// import AuthProvider from "./provides/AuthProvider";
import Users from "./pages/Users";
import FirebasePovider from "./provides/FirebasePovider";
import Register from "./pages/login/Register";
import PrivateRoute from "./privateRoute/PrivateRoute";
import ErrorElement from "./pages/ErrorElement";
import Contact from "./components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=>fetch('http://localhost:5000/painting')
      },
      {
        path:'/addCraft',
        element:<PrivateRoute>
          <AddCraft/>
        </PrivateRoute>
      },
      {
        path:'/allCraft',
        element:<AllCraft></AllCraft>,
        loader:()=>fetch('http://localhost:5000/alCraft')
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/users',
        element:<Users></Users>,
        loader:()=>fetch('http://localhost:5000/user')
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <FirebasePovider>
   <RouterProvider router={router} />
   </FirebasePovider>
  </React.StrictMode>
);