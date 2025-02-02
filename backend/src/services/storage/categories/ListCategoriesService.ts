import prismaClient from "../../../prisma";

export class ListCategoriesService {
    async execute() {
        const categories = await prismaClient.category.findMany();
        return categories;
    }
}