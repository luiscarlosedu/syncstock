import { Request, Response } from "express";
import { CreateProductService } from "../../../services/storage/products/CreateProductService";

export class CreateProductController {
    async handle(req: Request, res: Response) {
        const {
            nome, 
            descricao, 
            preco, 
            quantidade, 
            category_id, 
            enterprise_id,
        } = req.body;

        const createProductService = new CreateProductService();

        if (!req.file) {
            throw new Error("[ERROR] Você não enviou a foto do produto!");
        };

        const {originalname, filename: foto} = req.file;

        const product = await createProductService.execute({
            nome,
            descricao,
            preco,
            quantidade,
            foto: foto,
            category_id,
            enterprise_id
        });

        res.json(product);
    };
};