import prismaClient from "../../prisma";

export class GetDetailEnterpriseService {
    async execute(enterprise_id: string) {
        const enterprise = await prismaClient.empresa.findFirst({
            where: {
                id: enterprise_id
            },
        });

        console.log(enterprise);
        return enterprise;
    }
}