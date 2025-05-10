import { createBrowserRouter } from "react-router";

import { AuthLayout } from "./components/layouts/auth-layout";
import { UseLayout } from "./components/layouts/use-layout";
import { EmployeeRouteGuard } from "./routes/EmployeeRouteGuard";

import Select from "./pages/Select";

import LoginEnterprise from "./pages/AuthEnterprise/LoginEnterprise";
import RegisterEnterprise from "./pages/AuthEnterprise/RegisterEnterprise";

import RegisterEmployee from "./pages/AuthEmployee/RegisterEmployee";
import LoginEmployee from "./pages/AuthEmployee/LoginEmployee";

import HomeEnterprise from "./pages/AppEnterprise/Home";
import MyStoreEnterprise from "./pages/AppEnterprise/MyStore";
import StoreEdit from "./pages/AppEnterprise/MyStore/StoreEdit";
import StoreConfig from "./pages/AppEnterprise/MyStore/StoreConfig";
import CategoriesEnterprise from "./pages/AppEnterprise/Categories";
import NewCategoryEnterprise from "./pages/AppEnterprise/Categories/NewCategory";
import ProductsEnterprise from "./pages/AppEnterprise/Products";
import NewProductEnterprise from "./pages/AppEnterprise/Products/NewProduct";
import EmployeesEnterprise from "./pages/AppEnterprise/Employees";
import NewEmployeeEnterprise from "./pages/AppEnterprise/Employees/NewEmployee";
import AboutEnterprise from "./pages/AppEnterprise/About";
import FAQEnterprise from "./pages/AppEnterprise/FAQ";

import HomeEmployee from "./pages/AppEmployee/Home";
import CategoriesEmployee from "./pages/AppEmployee/Categories";
import ProductsEmployee from "./pages/AppEmployee/Products";
import EnterpriseEmployee from "./pages/AppEmployee/Enterprise";
import AboutEmployee from "./pages/AppEmployee/About";
import FAQEmployee from "./pages/AppEmployee/FAQ";

import PendingEmployee from "./pages/AppEmployee/PendingEmployee";
import MyAccountPending from "./pages/AppEmployee/MyAccountPending";
import MyAccountPendingEdit from "./pages/AppEmployee/MyAccountPending/MyAccountPendingEdit";

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
        path: '/empresa/detalhes',
        element: <MyStoreEnterprise />
      },
      {
        path: '/empresa/detalhes/editar',
        element: <StoreEdit />
      },
      {
        path: '/empresa/detalhes/configurar',
        element: <StoreConfig />
      },
      {
        path: '/empresa/categorias',
        element: <CategoriesEnterprise />
      },
      {
        path: '/empresa/categorias/criar',
        element: <NewCategoryEnterprise/>
      },
      {
        path: '/empresa/produtos',
        element: <ProductsEnterprise />
      },
      {
        path: '/empresa/produtos/adicionar',
        element: <NewProductEnterprise />
      },
      {
        path: '/empresa/funcionarios',
        element: <EmployeesEnterprise />
      },
      {
        path: '/empresa/funcionarios/adicionar',
        element: <NewEmployeeEnterprise />
      },
      {
        path: '/empresa/sobre',
        element: <AboutEnterprise />
      },
      {
        path: '/empresa/faq',
        element: <FAQEnterprise />
      },
    ],
  },
  {
    element: <UseLayout />,
    children: [
      {
        element: <EmployeeRouteGuard />,
        children: [
          {
            path: '/funcionario/home',
            element: <HomeEmployee />
          },
          {
            path: '/funcionario/categorias',
            element: <CategoriesEmployee />
          },
          {
            path: '/funcionario/produtos',
            element: <ProductsEmployee />
          },
          {
            path: '/funcionario/empresa',
            element: <EnterpriseEmployee />
          },
          {
            path: '/funcionario/sobre',
            element: <AboutEmployee />
          },
          {
            path: '/funcionario/faq',
            element: <FAQEmployee />
          },
        ]
      },
    ]
  },
  {
    path: '/funcionario/pendente',
    element: <PendingEmployee /> 
  },
  {
    path: '/funcionario/pendente/detalhes',
    element: <MyAccountPending />
  },
  {
    path: '/funcionario/pendente/detalhes/editar',
    element: <MyAccountPendingEdit />
  },
  {
    path: '*',
    element: <Error />
  }
]);

export { router };