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
                foto: true,
                telefone: true,
                endereco: true,
                createdAt: true,
            },
        });

        if(!enterprise) {
            throw new Error("[ERROR] Empresa não encontrada!");
        };

        return enterprise;
    }
}