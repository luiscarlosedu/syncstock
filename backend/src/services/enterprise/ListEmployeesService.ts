import prismaClient from "../../prisma";

interface ListEmployeesRequest {
    enterprise_id: string;
}

export class ListEmployeesService {
    async execute({ enterprise_id }: ListEmployeesRequest) {
        const enterpriseExists = await prismaClient.empresa.findFirst({
            where: {
                id: enterprise_id,
            },
        })

        if (!enterpriseExists) {
            throw new Error("[ERROR] Empresa não encontrada!");
        }

        const employees = await prismaClient.funcionario.findMany({
            where: {
                empresa_id: enterprise_id,
            },
            select: {
                id: true,
                nome: true,
                email: true,
                foto: true,
                createdAt: true,
                empresa: {
                    select: {
                        nome: true,
                    }
                }
            }
        });

        return employees;

    }
}