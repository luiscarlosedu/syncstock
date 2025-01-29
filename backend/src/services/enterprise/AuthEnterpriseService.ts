import { compare } from "bcryptjs";
import prismaClient from "../../prisma";

interface AuthEnterpriseRequest {
    email: string;
    cnpj: string;
    senha: string;
}

export class AuthEnterpriseService {
    async execute({
        email, cnpj, senha
    }: AuthEnterpriseRequest) {
        const enterprise = await prismaClient.empresa.findFirst({
            where: {
                email: email,
                cnpj: cnpj
            }
        }); 

        if (!enterprise) {
            throw new Error("[ERROR] Email/CNPJ/senha incorretos(as)!");
        }

        const passwordMatch = await compare(senha, enterprise.senha);

        if(!passwordMatch) {
            throw new Error("[ERROR] Email/CNPJ/senha incorretos(as)!");
        }

        return {
            email: email,
            id: enterprise.id,
            nome: enterprise.nome,
        }

    }
}