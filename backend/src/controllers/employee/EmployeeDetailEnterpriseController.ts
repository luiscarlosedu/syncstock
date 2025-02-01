import { Request, Response } from "express";
import { EmployeeDetailEnterpriseService } from "../../services/employee/EmployeeDetailEnterpriseService";

export class EmployeeDetailEnterpriseController {
    async handle(req: Request, res: Response) {
        const { enterprise_id } = req.body;

        const employeeDetailEnterpriseService = new EmployeeDetailEnterpriseService();
        const enterprise = await employeeDetailEnterpriseService.execute({ enterprise_id });
        
        res.json(enterprise);
    }
}