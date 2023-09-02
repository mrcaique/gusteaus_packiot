import { Request, Response } from "express";
import { UpdateTaskService } from "../services/UpdateTaskService";

export class UpdateTaskController {
    /**
     * Handle the execution for updating a task.
     * 
     * @param req - Object represents HTTP request and has properties to request
     *  body of a message.
     * @param res - Object represents HTTP response, that is get when a
     *  request is received.
     * @returns 400 status if specified task does not exists, otherwise, returns
     *  a JSON response as the updated task;
     */
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