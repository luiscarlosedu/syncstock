import prismaClient from "../../../prisma";
import { promises as fs } from "fs";
import path from "path";

export class DeleteProductService {
    async execute({ id }: { id: string }) {
        const product = await prismaClient.produto.findUnique({
            where: { id },
        });

        if (!product) {
            throw new Error("[ERROR] Produto não encontrado!");
        }

        if (product.foto) {
            const imagePath = path.resolve(__dirname, "..", "..", "..", "..", "tmp", product.foto);
            
            try {
                await fs.unlink(imagePath);
            } catch (error) {
                console.error("[ERROR] Falha ao excluir a imagem:", error);
            }
        }

        const deletedProduct = await prismaClient.produto.delete({
            where: { id },
            select: {
                id: true
            },
        });

        return deletedProduct;
    }
}