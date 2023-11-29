import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {jwtDecode} from 'jwt-decode';

import Layout from './layouts/Layout';
//import Register from './components/register/Register';
import Register from "./components/dashboard/register";


//import Login from './components/login/Login';
import Login from "./components/web/login/Login";

import Home from './components/web/Home';
import Categories from './components/web/Categories';


import DashbordLayout from './layouts/DashbordLayout';
import DashbordHome from './components/dashboard/Home';
import DashbordCategories from './components/dashboard/Categories'
import { useEffect, useState } from 'react';

function App() {
  
  const [user,setUser] = useState(null);
  const saveCurrentUser = () =>{
    const token = localStorage.getItem('userToken');
    const decoded = jwtDecode(token);
   
    setUser(decoded);
  }
  useEffect(()=>{
    if(localStorage.getItem('userToken')){
      saveCurrentUser();
    }
   
  },[]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout setUser={setUser} user ={user}/>,
      children: [
        {
          path: "register",
          element: <Register />
        },
        {
          path: "login",
          element: <Login saveCurrentUser = {saveCurrentUser} />
        },
        {
          path: "home",
          element: <Home />
        },
        {
          path: "categories",
          element: <Categories />
        },
        {
          path: "*",
          element: <h2>page not found --web</h2>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <DashbordLayout />,
      children: [{
        path: "home",
        element: <DashbordHome />
      },
      {
        path: "categories",
        element: <DashbordCategories />
      },
      {
        path: "*",
        element: <h2>page not found --dashbord</h2>
      }],
    }
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
