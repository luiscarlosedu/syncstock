import { Request, Response, Router } from "express";
import multer from "multer";

import { CreateEnterpriseController } from "./controllers/enterprise/CreateEnterpriseController";
import { getEnterpriseAcessTokenController } from "./controllers/enterprise/getEnterpriseAcessTokenController";

import uploadConfig from './config/multer';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

router.post("/enterprise", upload.single('file'), new CreateEnterpriseController().handle);

// rotas - Auth
router.get("/enterprise/token", new getEnterpriseAcessTokenController().handle);


export { router };