import { Request, Response } from "express";
import { EmailEmployeeService } from "../../services/enterprise/EmailEmployeeService";

export class EmailEmployeeController {
    async handle(req: Request, res: Response) {
        const { email } = req.body;
        const empresa_id = req.user_id;

        const emailEmployeeService = new EmailEmployeeService();
        const employee = await emailEmployeeService.execute({
            email, empresa_id
        });

        res.json(employee);
    }
}