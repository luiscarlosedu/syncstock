import { Router } from "express";
import multer from "multer";

import uploadConfig from './config/multer';

import { CreateEnterpriseController } from "./controllers/enterprise/CreateEnterpriseController";
import { GetEnterpriseAcessTokenController } from "./controllers/enterprise/GetEnterpriseAcessTokenController";
import { AuthEnterpriseController } from "./controllers/enterprise/AuthEnterpriseController";
import { GetDetailEnterpriseController } from "./controllers/enterprise/GetDetailEnterpriseController";
import { ListEmployeesController } from "./controllers/enterprise/ListEmployeesController";

import { CreateEmployeeController } from "./controllers/employee/CreateEmployeeController";
import { AuthTokenAcessEmployeeController } from './controllers/employee/AuthTokenAcessEmployeeController';
import { AuthEmployeeController } from "./controllers/employee/AuthEmployeeController";
import { EmployeeDetailController } from "./controllers/employee/EmployeeDetailController";
import { EmployeeDetailEnterpriseController } from "./controllers/employee/EmployeeDetailEnterpriseController";

import { isAuthenticaded } from "./middlewares/isAuthenticaded";
import { RemoveEmployeeController } from "./controllers/enterprise/RemoveEmployeeController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

router.post("/enterprise", upload.single('file'), new CreateEnterpriseController().handle);
router.post("/enterprise/session", new AuthEnterpriseController().handle);

router.post("/employee", upload.single('file'),new CreateEmployeeController().handle);
router.post("/employee/session", new AuthEmployeeController().handle);

// rotas - Auth
router.get("/enterprise/token", isAuthenticaded, new GetEnterpriseAcessTokenController().handle);
router.get("/enterprise/detail", isAuthenticaded, new GetDetailEnterpriseController().handle);
router.get("/enterprise/employees", isAuthenticaded, new ListEmployeesController().handle);
router.patch("/enterprise/remove-employee", isAuthenticaded, new RemoveEmployeeController().handle);

router.post("/employee/acess-token", isAuthenticaded, new AuthTokenAcessEmployeeController().handle);
router.get("/employee/detail", isAuthenticaded, new EmployeeDetailController().handle);
router.get("/employee/enterprise", isAuthenticaded, new EmployeeDetailEnterpriseController().handle);

export { router };