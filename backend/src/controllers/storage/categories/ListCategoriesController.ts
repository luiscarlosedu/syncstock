import { Request, Response } from "express";
import { ListCategoriesService } from "../../../services/storage/categories/ListCategoriesService";

export class ListCategoriesController {
    async handle(req: Request, res: Response) {
        const listCategoriesService = new ListCategoriesService();
        const categories = await listCategoriesService.execute();

        res.json(categories);
    }
}