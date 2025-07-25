import { Request, Response } from "express";
import { CreateCategoryService } from "../../../services/storage/categories/CreateCategoryService";

export class CreateCategoryController {
    async handle(req: Request, res: Response) {
        const { nome, empresa_id } = req.body;

        if (!nome || !empresa_id) {
            throw new Error("[ERROR] Você não preencheu os campos obrigatórios!");
        };

        const createCategoryService = new CreateCategoryService();
        const category = await createCategoryService.execute({nome, empresa_id});
        
        res.json(category);
    }
}