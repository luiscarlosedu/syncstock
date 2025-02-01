import { Request, Response } from "express";
import { RemoveEmployeeService } from "../../services/enterprise/RemoveEmployeeService";

export class RemoveEmployeeController {
    async handle(req: Request, res: Response) {
        const enterprise_id = req.user_id;
        const { employee_id } = req.body;

        const removeEmployeeService = new RemoveEmployeeService();
        const removeEmployee = removeEmployeeService.execute({enterprise_id, employee_id});

        res.json(removeEmployee);
    }
};