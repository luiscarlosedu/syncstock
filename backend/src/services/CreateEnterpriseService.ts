import prismaClient from "../prisma";

interface EnterpriseRequest {
    nome: string;
    cnpj: string;
    email: string;
    senha: string;
    endereco: string;
    telefone: string;
}

export class CreateEnterpriseService {
    async execute({
        nome, cnpj, email, senha, endereco, telefone
    }: EnterpriseRequest) {
        if (!email || !senha || !cnpj) {
            throw new Error("[ERRO] Você não digitou todos os campos obrigatórios!");
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


        // const enterprise = prismaClient.empresa.create({
        //     data: {
        //         nome: nome,
        //         cnpj: cnpj,
        //         email: email,
        //         senha: senha,

        //     }
        // })
    }
}