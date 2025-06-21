import prismaClient from "../../../prisma";

interface ListCategoriesRequest {
    enterprise_id: string;
}

export class ListCategoriesService {
    async execute({ enterprise_id }: ListCategoriesRequest) {
        const categories = await prismaClient.categoria.findMany({
            where: {
                empresa_id: enterprise_id,
            },
            include: {
                _count: {
                    select: {
                        produtos: true,
                    },
                },
            },
        });

        return categories.map((category) => ({
            id: category.id,
            nome: category.nome,
            produtosCount: category._count.produtos,
        }));
    }
}