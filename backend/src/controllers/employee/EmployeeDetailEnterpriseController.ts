import { Request, Response } from "express";
import { EmployeeDetailEnterpriseService } from "../../services/employee/EmployeeDetailEnterpriseService";
import prismaClient from "../../prisma";

export class EmployeeDetailEnterpriseController {
    async handle(req: Request, res: Response) {
        const employee_id = req.user_id;

        const employee = await prismaClient.funcionario.findFirst({
            where: {
                id: employee_id,
            },
            select: {
                empresa_id: true,
            }
        });

        const employeeDetailEnterpriseService = new EmployeeDetailEnterpriseService();
        const enterprise = await employeeDetailEnterpriseService.execute({ enterprise_id: employee.empresa_id });
        
        res.json(enterprise);
    }
}