import { compare } from "bcryptjs";
import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";

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

        const token = sign(
            {
                name: enterprise.nome,
                email: enterprise.email,
            },
            process.env.JWT_SECRET,
            {
                subject: enterprise.id,
                expiresIn: '30d'
            }
        );

        return {
            id: enterprise.id,
            nome: enterprise.nome,
            email: enterprise.email,
            cnpj: enterprise.cnpj,
            createdAt: enterprise.createdAt,
            foto: enterprise.foto,
            token: token,
        }

    }
}