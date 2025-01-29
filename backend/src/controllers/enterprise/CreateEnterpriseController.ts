import { Request, Response } from "express";
import { CreateEnterpriseService } from "../../services/enterprise/CreateEnterpriseService";

export class CreateEnterpriseController {
    async handle(req: Request, res: Response) {

        const { 
            nome,
            cnpj,
            email,
            senha,
            endereco,
            telefone,
        } = req.body;

        let foto = '';

        const createEnterpriseController = new CreateEnterpriseService();
        const enterprise = await createEnterpriseController.execute({
            nome,
            cnpj,
            email,
            senha,
            endereco,
            telefone,
            foto
        });

        res.json(enterprise);

    }
}