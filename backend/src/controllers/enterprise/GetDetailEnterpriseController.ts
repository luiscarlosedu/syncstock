import { Request, Response } from "express";
import { GetDetailEnterpriseService } from "../../services/enterprise/GetDetailEnterpriseService";

export class GetDetailEnterpriseController {
    async handle(req: Request, res: Response) {
        const enterprise_id = req.user_id;
        const getDetailEnterpriseService = new GetDetailEnterpriseService();
        const enterpriseDetail = getDetailEnterpriseService.execute(enterprise_id);

        res.json(enterpriseDetail);
    }
}