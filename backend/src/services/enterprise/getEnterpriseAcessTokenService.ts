import prismaClient from "../../prisma";

interface EnterpriseAcessTokenRequest {
    email: string;
}

export class GetEnterpriseAcessTokenService {
    async execute({email}: EnterpriseAcessTokenRequest) {
        const token = await prismaClient.empresa.findFirst({
            where: {
                email: email
            },
            select: {
                email: true,
                token_vinculo: true
            }
        });

        if(!token) {
            throw new Error('Empresa não encontrada');
        }

        return token;
    }
}