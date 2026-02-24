import { Request, Response } from "express";
import { ListProductsService } from "../../../services/storage/products/ListProductsService";

export class ListProductsController {
    async handle(req: Request, res: Response) {
        const { enterprise_id } = req.query;

        const listProductsService = new ListProductsService();
        const products = await listProductsService.execute({enterprise_id: enterprise_id as string});

        res.json(products);
    }
}