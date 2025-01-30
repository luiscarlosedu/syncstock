import { Request, Response } from "express";
import { GetEnterpriseAcessTokenService } from "../../services/enterprise/GetEnterpriseAcessTokenService";
export class GetEnterpriseAcessTokenController {
    async handle(req: Request, res: Response) {
        const { email } = req.body;
        const getEnterpriseAcessTokenService = new GetEnterpriseAcessTokenService();
        const token = await getEnterpriseAcessTokenService.execute({email});
        res.json(token);
    }
}