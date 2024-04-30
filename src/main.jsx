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
import MyCraftList from "./pages/MyCraftList";
import Details from "./pages/Details";
import Update from "./components/Update";

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
      },
      {
        path:'/myList',
        element:<PrivateRoute>
          <MyCraftList></MyCraftList>
        </PrivateRoute>
      },
      {
        path:'/details/:id',
        element:<PrivateRoute>
          <Details></Details>
        </PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/singleProduct/${params.id}`)
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`http://localhost:5000/alCraft/${params.id}`)
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