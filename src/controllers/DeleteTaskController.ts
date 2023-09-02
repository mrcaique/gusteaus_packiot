import { Request, Response } from "express";
import { DeleteTaskService } from "../services/DeleteTaskService";

export class DeleteTaskController {
    /**
     * 
     * @param req 
     * @param res 
     * @returns 
     */
    async handle(req : Request, res: Response) {
        const { id } = req.params;
        const service = new DeleteTaskService();
        const result = await service.execute(id);

        if (result instanceof Error) {
            return res.status(400).json(result.message);
        }

        return res.status(204).end();
    }
}