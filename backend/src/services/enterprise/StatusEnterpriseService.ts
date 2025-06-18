import prismaClient from "../../prisma";

interface StatusEnterpriseRequest {
    enterprise_id: string;
}

export class StatusEnterpriseService {
    async execute({ enterprise_id }: StatusEnterpriseRequest) {
        const products = await prismaClient.produto.findMany({
            where: {
                empresa_id: enterprise_id,
            },
        });

        const productsTotal = products.length;

        const categories = await prismaClient.categoria.findMany({
            where: {
                empresa_id: enterprise_id,
            },
        });

        const categoriesTotal = categories.length;

        const employees = await prismaClient.funcionario.findMany({
            where: {
                empresa_id: enterprise_id,
            },
        });

        const employeesTotal = employees.length;

        return {
            employeesTotal,
            productsTotal,
            categoriesTotal,
        }
    }
}