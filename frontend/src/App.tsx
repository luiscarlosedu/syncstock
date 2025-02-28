import { createBrowserRouter } from "react-router";

import { AuthLayout } from "./components/layouts/auth-layout";

import Select from "./pages/Select";
import LoginEnterprise from "./pages/AuthEnterprise/LoginEnterprise";
import RegisterEnterprise from "./pages/AuthEnterprise/RegisterEnterprise";

import RegisterEmployee from "./pages/AuthEmployee/RegisterEmployee";
import LoginEmployee from "./pages/AuthEmployee/LoginEmployee";


import HomeEnterprise from "./pages/AppEnterprise/Home";
// import HomeEmployee from "./pages/AppEmployee/Home";

import Error from "./pages/Error";
import { UseLayout } from "./components/layouts/use-layout";

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
        element: <LoginEmployee />
      },
      {
        path: '/register/funcionario',
        element: <RegisterEmployee />
      }
    ],
  },
  {
    element: <UseLayout />,
    children: [
      {
        path: '/empresa/home',
        element: <HomeEnterprise />
      },
    ],
  },
  {
    path: '*',
    element: <Error />
  }
]);

export { router };