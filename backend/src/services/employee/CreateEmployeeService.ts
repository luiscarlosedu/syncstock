import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface CreateEmployeeRequest {
    nome: string;
    email: string;
    senha: string;
    foto?: string;
}

export class CreateEmployeeService {
    async execute({
        nome, email, senha, foto
    }: CreateEmployeeRequest) {
        if (!nome || !email || !senha) {
            throw new Error("[ERROR] Você não preencheu todos os campos obrigatórios!")
        }

        const employeeAlreadyExists = await prismaClient.funcionario.findFirst({
            where: {
                email: email,
            }
        });

        if (employeeAlreadyExists) {
            throw new Error('[ERROR] Email já cadastrado!')
        }

        const passwordHash = await hash(senha, 7);

        const employee = await prismaClient.funcionario.create({
            data: {
                nome: nome,
                email: email,
                senha: passwordHash,
                foto: foto || null,
                employed: false,
                empresa_id: null
            },
            select: {
                id: true,
                nome: true,
                email: true,
                createdAt: true,
            }
        });
        
        return employee;
    }
}