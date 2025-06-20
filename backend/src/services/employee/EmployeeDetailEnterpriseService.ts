import prismaClient from "../../prisma";

interface EmployeeDetailEnterpriseRequest {
    enterprise_id: string;
}

export class EmployeeDetailEnterpriseService {
    async execute({ enterprise_id }: EmployeeDetailEnterpriseRequest) {
        const enterprise = await prismaClient.empresa.findFirst({
            where: {
                id: enterprise_id,
            },
            select: {
                nome: true,
                foto: true,
                telefone: true,
                endereco: true,
                createdAt: true,
                funcionarios: {
                    select: {
                        id: true,
                        nome: true,
                        email: true,
                        foto: true,
                        createdAt: true,
                    },
                },
            },
        });

        if(!enterprise) {
            throw new Error("[ERROR] Empresa não encontrada!");
        };

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
            productsCount,
            categoriesCount,
        };
    }
}