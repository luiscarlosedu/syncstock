import { Request, Response } from "express";
import { ListEmployeesService } from "../../services/enterprise/ListEmployeesService";

export class ListEmployeesController {
    async handle(req: Request, res: Response) {
        const { enterprise_id } = req.body;
        const listEmployeeService = new ListEmployeesService();
        const employees = await listEmployeeService.execute({enterprise_id});

        res.json(employees);
    }
}