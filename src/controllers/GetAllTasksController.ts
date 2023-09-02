import { Request, Response } from "express";
import { GetAllTasksService } from "../services/GetAllTasksService";

export class GetAllTasksController {
    /**
     * Handle the execution for listing all tasks.
     * 
     * @param _ - Object represents HTTP request.
     * @param res - Object represents HTTP response, that is get when a
     *  request is received.
     * @returns JSON response as list with all tasks;
     */
    async handle(_: Request, res: Response) {
        const service = new GetAllTasksService();
        const tasks = await service.execute();
        
        return res.json(tasks);
    }
}