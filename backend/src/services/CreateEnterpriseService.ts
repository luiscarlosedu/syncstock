interface EnterpriseRequest {
    name: string;
    cnpj: string;
    email: string;
    senha: string;
    endereco: string;
    telefone: string;
}

export class CreateEnterpriseService {
    async execute({
        name, cnpj, email, senha, endereco, telefone
    }: EnterpriseRequest) {
        return {ok: true}
    }
}