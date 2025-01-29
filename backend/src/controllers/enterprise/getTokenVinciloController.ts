import { Request, Response } from "express";
import { GetTokenVinculoService } from "../../services/enterprise/getTokenVinculoService";

export class GetTokenVinculoController {
    async handle(req: Request, res: Response) {
        const { email } = req.body;
        const getTokenVinculoController = new GetTokenVinculoService();
        const token = await getTokenVinculoController.execute({email});
        res.json(token);
    }
}