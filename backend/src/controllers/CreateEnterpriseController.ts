import { Request, Response } from "express";
import { CreateEnterpriseService } from "../services/CreateEnterpriseService";

export class CreateEnterpriseController {
    async handle(req: Request, res: Response) {

        const { 
            name,
            cnpj,
            email,
            senha,
            endereco,
            telefone,
        } = req.body;

        const createEnterpriseController = new CreateEnterpriseService();
        const enterprise = await createEnterpriseController.execute({
            name,
            cnpj,
            email,
            senha,
            endereco,
            telefone,
        });

    }
}