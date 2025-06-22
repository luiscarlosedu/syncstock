import prismaClient from "../../../prisma";

interface CreateProductRequest {
    nome: string;
    descricao?: string;
    preco: string;
    foto: string;
    quantidade: number;
    category_id: string;
    enterprise_id: string;
};

export class CreateProductService {
    async execute({
        nome, descricao, preco, foto, quantidade, category_id, enterprise_id
    }: CreateProductRequest) {
        if (!nome || !preco || !foto || !category_id || !enterprise_id) {
            throw new Error("[ERROR] Você não preencheu todos os campos!");
        };

        const product = await prismaClient.produto.create({
            data: {
                nome: nome,
                descricao: descricao,
                preco: Number(preco),
                foto: foto,
                quantidade: Number(quantidade),
                categoria_id: category_id,
                empresa_id: enterprise_id,
            }
        });

        return product;
    };
};