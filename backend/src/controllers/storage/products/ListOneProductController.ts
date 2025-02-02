import { Request, Response } from "express";
import { ListOneProductService } from "../../../services/storage/products/ListOneProductService";

export class ListOneProductController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const listOneProductService = new ListOneProductService();
        const product = await listOneProductService.execute({ id });

        res.json(product);
    }
}