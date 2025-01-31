import prismaClient from "../../prisma";

interface AuthTokenAcessEmployeeRequest {
    acess_token: string;
    employeeSub: string;
}

export class AuthTokenAcessEmployeeService {
    async execute({ acess_token, employeeSub }: AuthTokenAcessEmployeeRequest) {
        
        const enterprise = await prismaClient.empresa.findFirst({
            where: {
                token_vinculo: acess_token
            }
        });

        if (!enterprise) {
            throw new Error("[ERROR] Token de acesso inválido");
        };

        const employeeUpdate = await prismaClient.funcionario.update({
            where: {
                id: employeeSub
            },
            data: {
                employed: true,
                empresa_id: enterprise.id
            },
            select: {
                id: true,
                nome: true,
                email: true,
                employed: true,
                empresa_id: true
            }
        });

        return employeeUpdate;
    }
}