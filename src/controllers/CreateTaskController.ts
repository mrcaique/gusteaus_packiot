import { Request, Response } from "express";
import { CreateTaskService } from "../services/CreateTaskService";

export class CreateTaskController {
    /**
     * 
     * @param req 
     * @param res 
     * @returns 
     */
    async handle(req: Request, res: Response) {
        const {title, description} = req.body;
        const service = new CreateTaskService();
        const result = await service.execute({title, description});

        if (result instanceof Error) {
            return res.status(400).json(result.message);
        }

        return res.json(result);
    }
}