import prismaClient from "../../prisma";

interface EmailEmployeeRequest {
    email: string;
    empresa_id: string;
}

export class EmailEmployeeService {
    async execute({
        email, empresa_id
    }: EmailEmployeeRequest) {
        const employee = await prismaClient.funcionario.findFirst({
            where: {
                email,
            },
        });

        if (!employee) {
            throw new Error("[ERROR] Funcionário não encontrado!");
        };

        if (employee.employed) {
            throw new Error("[ERROR] Funcionário já está vinculado a uma empresa!");
        };

        const updateEmployee = await prismaClient.funcionario.update({
            where: {
                email,
            },
            data: {
                empresa_id,
                employed: true
            },
            select: {
                id: true,
                nome: true,
                email: true,
                employed: true,
                empresa_id: true,
            },
        });

        return updateEmployee;
    }
}