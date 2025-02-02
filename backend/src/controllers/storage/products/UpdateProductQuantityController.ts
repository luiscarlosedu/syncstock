import { UpdateProductQuantityService } from './../../../services/storage/products/UpdateProductQuantityService';
import { Request, Response } from "express";

export class UpdateProductQuantityController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { quantidade } = req.body;

        const updateProductQuantityService = new UpdateProductQuantityService();
        const updateProduct = await updateProductQuantityService.execute({
            id, quantidade: Number(quantidade),
        });

        res.json(updateProduct);
    }
}