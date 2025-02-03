import prismaClient from "../../prisma";
import { hash } from "bcryptjs";
import { v4 as uuidv4 } from 'uuid';

interface EnterpriseRequest {
    nome: string;
    cnpj: string;
    email: string;
    senha: string;
    endereco: string;
    telefone: string;
    foto: string;
}

export class CreateEnterpriseService {
    async execute({
        nome, cnpj, email, senha, endereco, telefone, foto
    }: EnterpriseRequest) {
        if (!nome || !email || !senha || !cnpj) {
            throw new Error("[ERRO] Você não preencheu todos os campos obrigatórios!");
        }
        
        const enterpriseAlreadyExists = await prismaClient.empresa.findFirst({
            where: {
                email: email
            }
        });

        if (enterpriseAlreadyExists) {
            throw new Error("[ERROR] Email já cadastrado!");
        }

        const cnpjAlreadyExists = await prismaClient.empresa.findFirst({
            where: {
                cnpj: cnpj
            }
        });

        if (cnpjAlreadyExists) {
            throw new Error("[ERROR] CNPJ já cadastrado!");
        }

        const passwordHash = await hash(senha, 7);

        const enterprise = await prismaClient.empresa.create({
            data: {
                nome, cnpj, email, senha: passwordHash, endereco: endereco, telefone, foto,
            },
            select: {
                nome: true,
                cnpj: true,
                email: true,
                endereco: true,
                telefone: true,
            }
        });

        return enterprise;
    }
}