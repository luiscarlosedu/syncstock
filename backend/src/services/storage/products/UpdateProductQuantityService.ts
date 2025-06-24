import prismaClient from "../../../prisma";

interface UpdateProductQuantityRequest {
    id: string;
    quantidade: number;
    tipo: "entrada" | "saida";
}

export class UpdateProductQuantityService {
    async execute({ id, quantidade, tipo }: UpdateProductQuantityRequest) {
        if (!id || quantidade === undefined || !tipo) {
            throw new Error("[ERROR] Você não preencheu todos os campos!");
        };

        const product = await prismaClient.produto.findUnique({
            where: { id }
        });

        if (!product) {
            throw new Error("[ERROR] Produto não encontrado!");
        };

        const novaQuantidade =
            tipo === 'entrada'
                ? product.quantidade + quantidade
                : product.quantidade - quantidade;

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