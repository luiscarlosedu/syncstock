import { createBrowserRouter } from "react-router";

import { AuthLayout } from "./components/layouts/auth-layout";

import Select from "./pages/Select";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/',
        element: <Select />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ],
  },
  {
    path: '*',
    element: <Error />
  }
]);

export { router };