import { Request, Response } from "express";
import { AuthEnterpriseService } from "../../services/enterprise/AuthEnterpriseService";

export class AuthEnterpriseController {
    async handle(req: Request, res: Response) {
        const { email, cnpj, senha } = req.body;

        const authEnterpriseService = new AuthEnterpriseService();
        const authEnterprise = await authEnterpriseService.execute({ email, cnpj, senha });

        res.json(authEnterprise);
    }
}