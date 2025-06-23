import prismaClient from "../../../prisma";

interface ListProductsRequest {
    enterprise_id: string;
}

export class ListProductsService {
    async execute({ enterprise_id }: ListProductsRequest) {
        const products = await prismaClient.produto.findMany({
            where: {
                empresa_id: enterprise_id,
            },
            select: {
                id: true,
                nome: true,
                preco: true,
                quantidade: true,
                categoria: {
                    select: {
                        id: true,
                        nome: true,
                    },
                },
                foto: true,
            },
        });

        return products;
    }
}