import prismaClient from "../../../prisma";

export class ListCategoriesService {
    async execute() {
        const categories = await prismaClient.categoria.findMany();
        return categories;
    }
}