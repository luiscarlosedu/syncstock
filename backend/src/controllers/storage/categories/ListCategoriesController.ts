import { Request, Response } from "express";
import { ListCategoriesService } from "../../../services/storage/categories/ListCategoriesService";

export class ListCategoriesController {
    async handle(req: Request, res: Response) {
        const enterprise_id = req.user_id;
        const listCategoriesService = new ListCategoriesService();
        const categories = await listCategoriesService.execute({enterprise_id});

        res.json(categories);
    }
}