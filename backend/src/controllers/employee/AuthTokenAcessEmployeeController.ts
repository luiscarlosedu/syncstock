import { Request, Response } from "express";
import { AuthTokenAcessEmployeeService } from "../../services/employee/AuthTokenAcessEmployeeService";

export class AuthTokenAcessEmployeeController {
    async handle(req: Request, res: Response) {
        const { acess_token } = req.body;
        const employeeSub = req.user_id;

        const authTokenAcessEmployeeService = new AuthTokenAcessEmployeeService();
        const acessToken = await authTokenAcessEmployeeService.execute({ acess_token, employeeSub });
        
        res.json(acessToken);
    }
}