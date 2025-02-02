import { Request, Response } from "express";
import { DeleteProductService } from "../../../services/storage/products/DeleteProductService";

export class DeleteProductController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const deleteProductService = new DeleteProductService();
        const product = await deleteProductService.execute({ id });
        
        res.json(product);
    }
}