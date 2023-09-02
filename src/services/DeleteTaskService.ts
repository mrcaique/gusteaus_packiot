import { Todo } from "../entities/Todo";
import { AppDataSource } from "../data-source";

export class DeleteTaskService {
    /**
     * Service resposible to delete a task from the databse.
     * 
     * @param id - id from the task to be removed.
     * @returns - If id does not exists, an Error is thrown.
     */
    async execute(id : string) {
        
        // Layer responsible to communicate with the database.
        const repo = AppDataSource.getRepository(Todo);

        if (!(await repo.findOneBy({id : id}))) {
            return new Error("Task does not exist!");
        }

        await repo.delete(id);
    }
}