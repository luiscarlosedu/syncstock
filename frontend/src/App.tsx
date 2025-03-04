import { createBrowserRouter } from "react-router";

import { AuthLayout } from "./components/layouts/auth-layout";
import { UseLayout } from "./components/layouts/use-layout";

import Select from "./pages/Select";

import LoginEnterprise from "./pages/AuthEnterprise/LoginEnterprise";
import RegisterEnterprise from "./pages/AuthEnterprise/RegisterEnterprise";

import RegisterEmployee from "./pages/AuthEmployee/RegisterEmployee";
import LoginEmployee from "./pages/AuthEmployee/LoginEmployee";

import HomeEnterprise from "./pages/AppEnterprise/Home";
import CategoriesEnterprise from "./pages/AppEnterprise/Categories";
import ProductsEnterprise from "./pages/AppEnterprise/Products";
import EmployeesEnterprise from "./pages/AppEnterprise/Employees";
import AboutEnterprise from "./pages/AppEnterprise/About";
import FAQEnterprise from "./pages/AppEnterprise/FAQ";

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
      {
        path: '/empresa/categorias',
        element: <CategoriesEnterprise />
      },
      {
        path: '/empresa/produtos',
        element: <ProductsEnterprise />
      },
      {
        path: '/empresa/funcionarios',
        element: <EmployeesEnterprise />
      },
      {
        path: '/empresa/sobre',
        element: <AboutEnterprise />
      },
      {
        path: '/empresa/faq',
        element: <FAQEnterprise />
      }
    ],
  },
  {
    path: '*',
    element: <Error />
  }
]);

export { router };