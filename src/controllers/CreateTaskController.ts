import { Request, Response } from "express";
import { CreateTaskService } from "../services/CreateTaskService";

export class CreateTaskController {
    /**
     * Handle the execution for creating a task.
     * 
     * @param req - Object represents HTTP request and has properties to request
     *  body of a message.
     * @param res - Object represents HTTP response, that is get when a
     *  request is received.
     * @returns Error if response is an error, otherwise, returns a JSON
     *  response as the new task created;
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