import { Request, Response } from "express";
import { ListEmployeesService } from "../../services/enterprise/ListEmployeesService";

export class ListEmployeesController {
    async handle(req: Request, res: Response) {
        const enterprise_id = req.user_id;
        const listEmployeeService = new ListEmployeesService();
        const employees = await listEmployeeService.execute({enterprise_id});
        
        if (employees.length > 0) {
            res.json(employees); 
        } else {
            res.json({
                message: "Essa empresa não possui funcionários!"
            });
        }

    }
}