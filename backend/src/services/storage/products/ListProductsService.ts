import prismaClient from "../../../prisma";

interface ListProductsRequest {
    enterprise_id: string;
}

export class ListProductsService {
    async execute({ enterprise_id }: ListProductsRequest) {
        const products = await prismaClient.produto.findMany({
            where: {
                empresa_id: enterprise_id,
            }
        });

        return products;
    }
}