import { Request, Response, response } from "express";
import { CreateTodoService } from "../services/CreateTodoService";

export class CreateTodoController {
    async handle(req: Request, res: Response) {
        const {title, description} = req.body;
        const service = new CreateTodoService();
        const result = await service.execute({title, description});

        return response.json(result);
    }
}