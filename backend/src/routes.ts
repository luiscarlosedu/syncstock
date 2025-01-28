import { Request, Response, Router } from "express";

const router = Router();

router.get('/hello', (req: Request, res: Response) => {
    return void res.json({ message: 'Hello, World!' });
});

export { router };