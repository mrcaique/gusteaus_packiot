import { Request, Response } from "express";
import { UpdateTaskService } from "../services/UpdateTaskService";

export class UpdateTaskController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { title, description } = req.body;
        
        const service = new UpdateTaskService();
        const result = await service.execute({ id, title, description });

        if (result instanceof Error) {
            return res.status(400).json(result.message);
        }

        return res.json(result);
    }
}