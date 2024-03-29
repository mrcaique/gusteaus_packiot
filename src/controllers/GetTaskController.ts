import { Request, Response } from "express";
import { GetTaskService } from "../services/GetTaskService";

export class GetTaskController {
    /**
     * Handle the execution for getting a specific task.
     * 
     * @param req - Object represents HTTP request and has properties to request
     *  parameters.
     * @param res - Object represents HTTP response, that is get when a
     *  request is received.
     * @returns JSON response as informations of specified task;
     */
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const int_id = Number(id);
        if (!Number.isInteger(int_id)) {
            return res.status(400).json("ID not found.");
        }

        const service = new GetTaskService();

        try{
            const task = await service.execute(int_id);
            return res.json(task);
        } catch(e) {
            return res.status(400).json(e.message);
        }
    }
}