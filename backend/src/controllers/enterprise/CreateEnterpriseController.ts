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

        const createEnterpriseService = new CreateEnterpriseService();

        if (!req.file) {
            throw new Error("[ERROR] Erro ao postar foto")
        } else {
            const { originalname, filename: banner } = req.file;

            const enterprise = await createEnterpriseService.execute({
                nome,
                cnpj,
                email,
                senha,
                endereco,
                telefone,
                foto: banner
            });
    
            res.json(enterprise);
        }
        

    }
}