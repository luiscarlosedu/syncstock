import { Request, Response } from "express";
import { getEnterpriseAcessTokenService } from "../../services/enterprise/getEnterpriseAcessTokenService";

export class getEnterpriseAcessTokenController {
    async handle(req: Request, res: Response) {
        const { email } = req.body;
        const getTokenVinculoController = new getEnterpriseAcessTokenService();
        const token = await getTokenVinculoController.execute({email});
        res.json(token);
    }
}