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
import FirebasePovider from "./provides/FirebasePovider";
import Register from "./pages/login/Register";
import PrivateRoute from "./privateRoute/PrivateRoute";
import ErrorElement from "./pages/ErrorElement";
import Contact from "./components/Contact";
import MyCraftList from "./pages/MyCraftList";
import Details from "./pages/Details";
import Update from "./components/Update";
import Blogs from "./components/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=>fetch('https://landscape-painting-server.vercel.app/painting')
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
        loader:()=>fetch('https://landscape-painting-server.vercel.app/alCraft')
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
        loader:({params})=>fetch(`https://landscape-painting-server.vercel.app/singleProduct/${params.id}`)
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`https://landscape-painting-server.vercel.app/alCraft/${params.id}`)
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
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