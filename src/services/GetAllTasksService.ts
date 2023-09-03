import { Todo } from "../entities/Todo";
import { getDataSource } from "../data-source";

export class GetAllTasksService {
    /**
     * Service resposible to return a list of all tasks registered in the
     * database
     * 
     * @returns List with all tasks registered. 
     */
    async execute() {
        
        // Layer responsible to communicate with the database.
        const AppDataSource = await getDataSource();
        const repo = AppDataSource.getRepository(Todo);

        const tasks = await repo.find();

        return tasks;
    }
}