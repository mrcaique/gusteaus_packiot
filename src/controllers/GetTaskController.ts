import { Request, Response } from "express";
import { GetTaskService } from "../services/GetTaskService";

export class GetTaskController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { title, description } = req.body;

        const service = new GetTaskService();
        const task = await service.execute({id, title, description});
        
        return res.json(task);
    }
}