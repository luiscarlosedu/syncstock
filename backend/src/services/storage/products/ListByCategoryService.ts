import prismaClient from "../../../prisma"

interface ListByCategoryRequest {
    category_id: string
}

export class ListByCategoryService {
    async execute({ category_id }: ListByCategoryRequest) {
        const products = await prismaClient.produto.findFirst({
            where: {
                categoria_id: category_id
            },
        });

        if (!products) {
            throw new Error("[ERROR] Não foi possível encontrar produtos dessa categoria!");
        };

        return products;
    }
}