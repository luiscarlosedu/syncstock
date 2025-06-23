import { UpdateProductQuantityService } from './../../../services/storage/products/UpdateProductQuantityService';
import { Request, Response } from "express";

export class UpdateProductQuantityController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { quantidade, tipo } = req.body;

        if (!id || !quantidade || !tipo) {
            throw new Error("[ERROR] Você não preencheu todos os campos!");
        };

        const updateProductQuantityService = new UpdateProductQuantityService();
        const updateProduct = await updateProductQuantityService.execute({
            id, 
            quantidade: Number(quantidade),
            tipo: tipo === 'entrada' ? "entrada" : "saida",
        });

        res.json(updateProduct);
    }
}