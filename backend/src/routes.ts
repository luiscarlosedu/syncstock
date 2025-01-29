import { Request, Response, Router } from "express";
import { CreateEnterpriseController } from "./controllers/CreateEnterpriseController";
const router = Router();

router.post("/enterprise", new CreateEnterpriseController().handle);

export { router };