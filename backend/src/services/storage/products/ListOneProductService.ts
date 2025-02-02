import prismaClient from "../../../prisma";

interface ListOneProductRequest {
    id: string;
}

export class ListOneProductService {
    async execute({ id }: ListOneProductRequest) {
        const product = await prismaClient.produto.findFirst({
            where: {
                id,
            },
            select: {
                id: true,
                nome: true,
                preco: true,
                quantidade: true,
                createdAt: true,
                updatedAt: true,
                categoria: {
                    select: {
                        nome: true,
                    }
                },
                empresa: {
                    select: {
                        nome: true
                    }
                }
            }
        });

        if (!product) {
            throw new Error("[ERROR] Produto não encontrado");
        };

        return product;
    }   
}