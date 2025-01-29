import { Request, Response, Router } from "express";

import { CreateEnterpriseController } from "./controllers/enterprise/CreateEnterpriseController";
import { getEnterpriseAcessTokenController } from "./controllers/enterprise/getEnterpriseAcessTokenController";

const router = Router();

router.post("/enterprise", new CreateEnterpriseController().handle);

// rotas - Auth
router.get("/enterprise/token", new getEnterpriseAcessTokenController().handle);


export { router };