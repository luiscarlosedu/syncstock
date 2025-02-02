import prismaClient from "../../../prisma";

interface CreateProductRequest {
    nome: string;
    descricao?: string;
    preco: number;
    foto: string;
    category_id: string;
    enterprise_id: string;
};

export class CreateProductService {
    async execute({
        nome, descricao, preco, foto, category_id, enterprise_id
    }: CreateProductRequest) {
        if (!nome || !preco || !foto || !category_id || !enterprise_id) {
            throw new Error("[ERROR] Você não preencheu todos os campos!");
        };

        const product = await prismaClient.produto.create({
            data: {
                nome: nome,
                descricao: descricao,
                preco: preco,
                foto: foto,
                categoria_id: category_id,
                empresa_id: enterprise_id,
            }
        });
    };
};