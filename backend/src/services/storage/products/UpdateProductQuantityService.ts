import prismaClient from "../../../prisma";

interface UpdateProductQuantityRequest {
    id: string;
    quantidade: number;
}

export class UpdateProductQuantityService {
    async execute({ id, quantidade }: UpdateProductQuantityRequest) {
        if (!id || quantidade === undefined) {
            throw new Error("[ERROR] Você não preencheu todos os campos!");
        };

        const product = await prismaClient.produto.findUnique({
            where: { id }
        });

        if (!product) {
            throw new Error("[ERROR] Produto não encontrado!");
        };

        const novaQuantidade = product.quantidade + quantidade;

        if (novaQuantidade < 0) {
            throw new Error("[ERROR] Estoque insuficiente!");
        }

        const updateProduct = await prismaClient.produto.update({
            where: { id },
            data: {
                quantidade: novaQuantidade
            }
        });
        
        return updateProduct;
    }
}