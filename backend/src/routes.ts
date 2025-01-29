import { Request, Response, Router } from "express";
import multer from "multer";

import { CreateEnterpriseController } from "./controllers/enterprise/CreateEnterpriseController";
import { GetEnterpriseAcessTokenController } from "./controllers/enterprise/GetEnterpriseAcessTokenController";
import { AuthEnterpriseController } from "./controllers/enterprise/AuthEnterpriseController";

import uploadConfig from './config/multer';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

router.post("/enterprise", upload.single('file'), new CreateEnterpriseController().handle);
router.post("/enterprise/session", new AuthEnterpriseController().handle);

// rotas - Auth
router.get("/enterprise/token", new GetEnterpriseAcessTokenController().handle);


export { router };