import { createBrowserRouter } from "react-router";

import { AuthLayout } from "./components/layouts/auth-layout";

import Select from "./pages/Select";
import LoginEnterprise from "./pages/AuthEnterprise/LoginEnterprise";
import RegisterEnterprise from "./pages/AuthEnterprise/RegisterEnterprise";

import RegisterEmployee from "./pages/AuthEmployee/RegisterEmployee";
import LoginEmployee from "./pages/AuthEmployee/LoginEmployee";

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
        path: '/login/empresa',
        element: <LoginEnterprise />
      },
      {
        path: '/register/empresa',
        element: <RegisterEnterprise />
      },
      {
        path: '/login/funcionario',
        element: <RegisterEmployee />
      },
      {
        path: '/register/funcionario',
        element: <LoginEmployee />
      }
    ],
  },
  {
    path: '*',
    element: <Error />
  }
]);

export { router };