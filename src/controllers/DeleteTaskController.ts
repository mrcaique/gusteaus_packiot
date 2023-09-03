import { Request, Response } from "express";
import { DeleteTaskService } from "../services/DeleteTaskService";

export class DeleteTaskController {
    /**
     * Handle the execution for deleting a task.
     * 
     * @param req - Object represents HTTP request and has properties to request
     *  parameters.
     * @param res - Object represents HTTP response, that is get when a
     *  request is received.
     * @returns 400 status if id does not exists, otherwise, returns 204 status;
     */
    async handle(req : Request, res: Response) {
        const { id } = req.params;
        const service = new DeleteTaskService();
        const result = await service.execute(parseInt(id));

        if (result instanceof Error) {
            return res.status(400).json(result.message);
        }

        return res.status(204).end();
    }
}