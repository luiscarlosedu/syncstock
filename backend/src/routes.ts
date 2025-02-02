import { Router } from "express";
import multer from "multer";

import uploadConfig from './config/multer';

import { isAuthenticaded } from "./middlewares/isAuthenticaded";

import { CreateEnterpriseController } from "./controllers/enterprise/CreateEnterpriseController";
import { GetEnterpriseAcessTokenController } from "./controllers/enterprise/GetEnterpriseAcessTokenController";
import { AuthEnterpriseController } from "./controllers/enterprise/AuthEnterpriseController";
import { GetDetailEnterpriseController } from "./controllers/enterprise/GetDetailEnterpriseController";
import { ListEmployeesController } from "./controllers/enterprise/ListEmployeesController";
import { RemoveEmployeeController } from "./controllers/enterprise/RemoveEmployeeController";

import { CreateEmployeeController } from "./controllers/employee/CreateEmployeeController";
import { AuthTokenAcessEmployeeController } from './controllers/employee/AuthTokenAcessEmployeeController';
import { AuthEmployeeController } from "./controllers/employee/AuthEmployeeController";
import { EmployeeDetailController } from "./controllers/employee/EmployeeDetailController";
import { EmployeeDetailEnterpriseController } from "./controllers/employee/EmployeeDetailEnterpriseController";

import { CreateCategoryController } from "./controllers/storage/categories/CreateCategoryController";
import { ListCategoriesController } from "./controllers/storage/categories/ListCategoriesController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

router.post("/enterprise", upload.single('file'), new CreateEnterpriseController().handle);
router.post("/enterprise/session", new AuthEnterpriseController().handle);

router.post("/employee", upload.single('file'),new CreateEmployeeController().handle);
router.post("/employee/session", new AuthEmployeeController().handle);

// rotas - Auth

// Rotas - Enterprise / Empresa
router.get("/enterprise/token", isAuthenticaded, new GetEnterpriseAcessTokenController().handle);
router.get("/enterprise/detail", isAuthenticaded, new GetDetailEnterpriseController().handle);
router.get("/enterprise/employees", isAuthenticaded, new ListEmployeesController().handle);
router.patch("/enterprise/remove-employee", isAuthenticaded, new RemoveEmployeeController().handle);

// Rotas - Employee / Funcionário
router.post("/employee/acess-token", isAuthenticaded, new AuthTokenAcessEmployeeController().handle);
router.get("/employee/detail", isAuthenticaded, new EmployeeDetailController().handle);
router.get("/employee/enterprise", isAuthenticaded, new EmployeeDetailEnterpriseController().handle);

// Rotas - Categories / Categorias
router.post("/category", isAuthenticaded, new CreateCategoryController().handle);
router.get("/categories", isAuthenticaded, new ListCategoriesController().handle);

// Rotas - Products / Produtos

export { router };