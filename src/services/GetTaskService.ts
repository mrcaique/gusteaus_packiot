import { Todo } from "../entities/Todo";
import { AppDataSource } from "../data-source";

export class GetTaskService {
    /**
     * Service resposible to return a specific task.
     * 
     * @param id - Task identifier.
     * @returns If task does not exists, an Error is thrown.
     */
    async execute(id : string) {

        // Layer responsible to communicate with the database.
        const repo = AppDataSource.getRepository(Todo);

        const task = await repo.findOneBy({id : id});

        if (!task) {
            return new Error("Task does not exists!");
        }

        return task;
    }
}