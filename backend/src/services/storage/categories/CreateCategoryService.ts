import prismaClient from "../../../prisma";

interface CreateCategoryRequest {
    nome: string;
    empresa_id: string;
}

export class CreateCategoryService {
    async execute({ nome, empresa_id }: CreateCategoryRequest) {
        const category = prismaClient.categoria.create({
            data: {
                nome,
                empresa_id
            },
            select: {
                id: true,
                nome: true,
            }
        });

        return category;
    }
}