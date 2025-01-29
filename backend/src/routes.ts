import { Request, Response, Router } from "express";

import { CreateEnterpriseController } from "./controllers/enterprise/CreateEnterpriseController";
import { GetTokenVinculoController } from "./controllers/enterprise/getTokenVinciloController";

const router = Router();

router.post("/enterprise", new CreateEnterpriseController().handle);

// rotas - Auth
router.get("/enterprise/token", new GetTokenVinculoController().handle);


export { router };