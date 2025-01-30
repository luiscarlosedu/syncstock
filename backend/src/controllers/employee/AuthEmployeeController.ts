import { Request, Response } from "express";
import { AuthEmployeeService } from "../../services/employee/AuthEmployeeService";

export class AuthEmployeeController {
    async handle(req: Request, res: Response) {
        const { email, senha } = req.body;

        const authEmployeeService = new AuthEmployeeService();
        const authEmployee = await authEmployeeService.execute({ email, senha });

        res.json(authEmployee);
    }
}