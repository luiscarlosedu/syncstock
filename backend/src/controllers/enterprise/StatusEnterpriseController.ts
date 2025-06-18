import { Request, Response } from "express";
import { StatusEnterpriseService } from "../../services/enterprise/StatusEnterpriseService";

export class StatusEnterpriseController {
    async handle(req: Request, res: Response) {
        const enterprise_id = req.user_id;

        const statusEntepriseService = new StatusEnterpriseService();
        const statusEnterprise = await statusEntepriseService.execute({enterprise_id});

        res.json(statusEnterprise);
    }
}