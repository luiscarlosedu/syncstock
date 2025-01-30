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
        return {
            nome, email, senha
        }
    }
}