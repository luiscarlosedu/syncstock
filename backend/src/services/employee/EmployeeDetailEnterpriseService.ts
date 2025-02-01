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
            },
        });

        if(!enterprise) {
            throw new Error("[ERROR] Empresa não encontrada!");
        }

        return enterprise;
    }
}