  import { createBrowserRouter } from "react-router-dom";
  import MainLayout from "../layouts/MainLayout";
  import Home from "../pages/Home";
  import Dashboard from "../pages/Dashboard";
  import Profile from "../pages/Profile";
  import Login from "../pages/Login";
  import Register from "../pages/Register";
  import Callback from "../pages/Callback";
  import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      
  path: "/", 
  element: (
    <PrivateRoute>
      <MainLayout />
    </PrivateRoute>
  ),
  children: [
    {
      path: "",
      element: <Home />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
  ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/callback",
      element: <Callback />,
    },
  ]);

  export default router;
