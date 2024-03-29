import { Todo } from "../entities/Todo";
import { getDataSource } from "../data-source";

export class GetTaskService {
    /**
     * Service resposible to return a specific task.
     * 
     * @param id - Task identifier.
     * @returns If task does not exists, an Error is thrown.
     */
    async execute(id : number) {

        // Layer responsible to communicate with the database.
        const AppDataSource = await getDataSource();
        const repo = AppDataSource.getRepository(Todo);

        const task = await repo.findOneBy({id : id});

        if (!task) {
            throw new Error("ID not found");
        }

        return task;
    }
}