import { Request, Response } from "express";
import { CreateEmployeeService } from "../../services/employee/CreateEmployeeService";

export class CreateEmployeeController {
    async handle(req: Request, res: Response) {
        const { nome, email, senha} = req.body;
        
        const createEmployeeService = new CreateEmployeeService();

        let foto = null;

        if (req.file) {
            const { originalname, filename: banner } = req.file;
            foto = banner;
            console.log("enviou foto!", banner, originalname);
        } else {
            console.log("Não enviou foto, será enviada como null")
        }

        const employee = await createEmployeeService.execute({
            nome, email, senha, foto
        });

        res.json(employee);
    }
}