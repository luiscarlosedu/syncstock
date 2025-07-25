import prismaClient from "../../prisma";

interface EmployeeDetailRequest {
    employee_id: string;
}

export class EmployeeDetailService {
    async execute({ employee_id }: EmployeeDetailRequest) {
        const employee = await prismaClient.funcionario.findFirst({
            where: {
                id: employee_id
            },
            select: {
                id: true,
                nome: true,
                email: true,
                employed: true,
                foto: true,
                createdAt: true,
                empresa: {
                    select: {
                        id: true,
                        nome: true,
                        foto: true,
                    }
                }
            }
        });

        if (!employee) {
            throw new Error("[ERROR] Funcionário não encontrado");
        };

        return employee;
    }
};