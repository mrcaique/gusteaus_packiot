import { Request, Response } from "express";
import { GetTaskService } from "../services/GetTaskService";

export class GetTaskController {
    /**
     * 
     * @param req 
     * @param res 
     * @returns 
     */
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const service = new GetTaskService();
        const task = await service.execute(id);
        
        return res.json(task);
    }
}