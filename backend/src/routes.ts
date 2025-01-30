import { Request, Response, Router } from "express";
import multer from "multer";

import { CreateEnterpriseController } from "./controllers/enterprise/CreateEnterpriseController";
import { GetEnterpriseAcessTokenController } from "./controllers/enterprise/GetEnterpriseAcessTokenController";
import { AuthEnterpriseController } from "./controllers/enterprise/AuthEnterpriseController";
import { GetDetailEnterpriseController } from "./controllers/enterprise/GetDetailEnterpriseController";

import { isAuthenticaded } from "./middlewares/isAuthenticaded";

import uploadConfig from './config/multer';
import { CreateEmployeeController } from "./controllers/employee/CreateEmployeeController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

router.post("/enterprise", upload.single('file'), new CreateEnterpriseController().handle);
router.post("/enterprise/session", new AuthEnterpriseController().handle);

router.post("/employee", upload.single('file'),new CreateEmployeeController().handle);

// rotas - Auth
router.get("/enterprise/token", isAuthenticaded, new GetEnterpriseAcessTokenController().handle);
router.get("/enterprise/detail", isAuthenticaded, new GetDetailEnterpriseController().handle);


export { router };