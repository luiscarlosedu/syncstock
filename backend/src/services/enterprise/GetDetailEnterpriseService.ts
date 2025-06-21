import prismaClient from "../../prisma";

interface DetailEnterpriseRequest {
    enterprise_id: string;
};

export class GetDetailEnterpriseService {
    async execute({ enterprise_id }: DetailEnterpriseRequest) {
        const enterprise = await prismaClient.empresa.findFirst({
            where: {
                id: enterprise_id
            },
            select: {
                nome: true,
                email: true,
                cnpj: true,
                foto: true,
                telefone: true,
                endereco: true,
                createdAt: true,
            },
        });

        if(!enterprise) {
            throw new Error("[ERROR] Empresa não encontrada!");
        };

        const employeesCount = await prismaClient.funcionario.count({
            where: {
                empresa_id: enterprise_id,
            },
        });

        const productsCount = await prismaClient.produto.count({
            where: {
                empresa_id: enterprise_id,
            },
        });

        const categoriesCount = await prismaClient.categoria.count({
            where: {
                empresa_id: enterprise_id,
            },
        });

        return {
            ...enterprise,
            employeesCount,
            productsCount,
            categoriesCount,
        };
    }
}