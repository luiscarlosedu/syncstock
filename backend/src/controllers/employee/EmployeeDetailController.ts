import { Request, Response } from "express";
import { EmployeeDetailService } from "../../services/employee/EmployeeDetailService";

export class EmployeeDetailController  {
    async handle(req: Request, res: Response) {
        const employee_id = req.user_id;
        
        const employeeDetailService = new EmployeeDetailService();
        const employee = await employeeDetailService.execute({
            employee_id
        });

        res.json(employee);
    }
}