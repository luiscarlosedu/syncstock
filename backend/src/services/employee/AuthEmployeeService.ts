import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthEmployeeRequest {
    email: string;
    senha: string;
}

export class AuthEmployeeService {
    async execute({ email, senha }: AuthEmployeeRequest) {
        const employee = await prismaClient.funcionario.findFirst({
            where: {
                email: email,
            },
        });

        if (!employee) {
            throw new Error("[ERROR] Email/Senha incorreto(a)!");
        }

        const passwordMatch = await compare(senha, employee.senha); 

        if (!passwordMatch) {
            throw new Error("[ERROR] Email/Senha incorreto(a)!");
        }

        const token = sign(
            {
                name: employee.nome,
                email: employee.email,
            },
            process.env.JWT_SECRET,
            {
                subject: employee.id,
                expiresIn: '30d'
            }
        );

        return {
            id: employee.id,
            nome: employee.nome,
            email: employee.email,
            employed: employee.employed,
            foto: employee.foto ?? undefined,
            token: token,
        }
    }
}