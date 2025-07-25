import { Router } from "express";
import multer from "multer";

import uploadConfig from './config/multer';

import { isAuthenticaded } from "./middlewares/isAuthenticaded";

import { CreateEnterpriseController } from "./controllers/enterprise/CreateEnterpriseController";
import { AuthEnterpriseController } from "./controllers/enterprise/AuthEnterpriseController";
import { GetDetailEnterpriseController } from "./controllers/enterprise/GetDetailEnterpriseController";
import { ListEmployeesController } from "./controllers/enterprise/ListEmployeesController";
import { StatusEnterpriseController } from "./controllers/enterprise/StatusEnterpriseController";
import { RemoveEmployeeController } from "./controllers/enterprise/RemoveEmployeeController";
import { EmailEmployeeController } from "./controllers/enterprise/EmailEmployeeController";

import { CreateEmployeeController } from "./controllers/employee/CreateEmployeeController";
import { AuthEmployeeController } from "./controllers/employee/AuthEmployeeController";
import { EmployeeDetailController } from "./controllers/employee/EmployeeDetailController";
import { EmployeeDetailEnterpriseController } from "./controllers/employee/EmployeeDetailEnterpriseController";

import { CreateCategoryController } from "./controllers/storage/categories/CreateCategoryController";
import { ListCategoriesController } from "./controllers/storage/categories/ListCategoriesController";

import { CreateProductController } from "./controllers/storage/products/CreateProductController";
import { ListProductsController } from "./controllers/storage/products/ListProductsController";
import { ListOneProductController } from './controllers/storage/products/ListOneProductController';
import { ListByCategoryController } from "./controllers/storage/products/ListByCategoryController";
import { DeleteProductController } from "./controllers/storage/products/DeleteProductController";
import { UpdateProductQuantityController } from "./controllers/storage/products/UpdateProductQuantityController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));


// ====== Rotas - Guest ========
router.post("/enterprise", upload.single('file'), new CreateEnterpriseController().handle);
router.post("/enterprise/session", new AuthEnterpriseController().handle);

router.post("/employee", upload.single('file'),new CreateEmployeeController().handle);
router.post("/employee/session", new AuthEmployeeController().handle);

// ====== Rotas - Auth ========

// Rotas - Enterprise / Empresa
router.get("/enterprise/detail", isAuthenticaded, new GetDetailEnterpriseController().handle);
router.post("/employee/approve", isAuthenticaded, new EmailEmployeeController().handle);
router.get("/enterprise/employees", isAuthenticaded, new ListEmployeesController().handle);
router.get("/enterprise/status", isAuthenticaded, new StatusEnterpriseController().handle);
router.patch("/enterprise/remove-employee", isAuthenticaded, new RemoveEmployeeController().handle);

// Rotas - Employee / Funcionário
router.get("/employee/detail", isAuthenticaded, new EmployeeDetailController().handle);
router.get("/employee/enterprise", isAuthenticaded, new EmployeeDetailEnterpriseController().handle);

// Rotas - Categories / Categorias
router.post("/category", isAuthenticaded, new CreateCategoryController().handle);
router.get("/categories", isAuthenticaded, new ListCategoriesController().handle);

// Rotas - Products / Produtos
router.post("/product", isAuthenticaded, upload.single('file'), new CreateProductController().handle);
router.get("/products", isAuthenticaded, new ListProductsController().handle);
router.get("/products/:id", isAuthenticaded, new ListOneProductController().handle);
router.get("/products/category/:id", isAuthenticaded, new ListByCategoryController().handle);
router.delete("/products/:id", isAuthenticaded, new DeleteProductController().handle);
router.put("/product/:id/quantity", isAuthenticaded, new UpdateProductQuantityController().handle);

export { router };