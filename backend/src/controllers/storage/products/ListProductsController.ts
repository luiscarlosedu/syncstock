import { Request, Response } from "express";
import { ListProductsService } from "../../../services/storage/products/ListProductsService";

export class ListProductsController {
    async handle(req: Request, res: Response) {
        const { enterprise_id } = req.body;
        
        const listProductsService = new ListProductsService();
        const products = await listProductsService.execute({enterprise_id});

        res.json(products);
    }
}