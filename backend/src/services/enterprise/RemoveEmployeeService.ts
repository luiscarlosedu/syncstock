import prismaClient from "../../prisma";

interface RemoveEmployeeRequest {
    enterprise_id: string;
    employee_id: string;
}

export class RemoveEmployeeService {
    async execute({
        enterprise_id, employee_id
    }: RemoveEmployeeRequest) {
        const employee = await prismaClient.funcionario.findFirst({
            where: {
                id: employee_id,
            }
        });

        if (!employee) {
            throw new Error("[ERROR] Funcionário não encontrado!");
        };

        if (employee.empresa_id !== enterprise_id) {
            throw new Error("[ERROR] Esse funcionário não pertence à sua empresa!");
        };

        const removeEmployee = await prismaClient.funcionario.update({
            where: {
                id: employee_id
            },
            data: {
                empresa_id: null,
                employed: false,
            }
        });

        return {
            message: "Funcionário removido com sucesso.",
        }
    }
}