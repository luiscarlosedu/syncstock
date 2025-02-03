import { Request, Response } from "express";
import { ListByCategoryService } from "../../../services/storage/products/ListByCategoryService";

export class ListByCategoryController {
    async handle(req: Request, res: Response) {
        const { category_id } = req.params;

        const listByCategoryService = new ListByCategoryService();
        const productsByCategory = await listByCategoryService.execute({ category_id });

        res.json(productsByCategory);
    }
}