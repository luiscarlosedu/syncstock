import { Request, Response, Router } from "express";
import { CreateEnterpriseController } from "./controllers/CreateEnterpriseController";
const router = Router();

router.get("/enterprise", new CreateEnterpriseController().handle);

export { router };