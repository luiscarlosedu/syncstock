import prismaClient from "../../prisma";

export class getEnterpriseAcessTokenService {
    async execute({email}: {email: string}) {
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