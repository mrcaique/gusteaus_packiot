import { Todo } from "../entities/Todo";
import { getDataSource } from "../data-source";
import { IsNull } from "typeorm";

// Informations needed to create a new task.
type TaskRequest = {
    title: string,
    description: string;
}

export class CreateTaskService {
    /**
     * Service responsible to create a task on the database.
     * 
     * @param param0 - Contents needed to create a new task, in this case, a
     *  title and a description.
     * @returns task - Created task.
     */
    async execute({title, description} : TaskRequest) : Promise<Todo> {
        
        // Layer responsible to communicate with the database.
        const AppDataSource = await getDataSource();
        const repo = AppDataSource.getRepository(Todo);

        if (!title || !description) {
            throw new Error("Title or description is null");
        }

        const task = repo.create({
            title,
            description
        })

        await repo.save(task);
        return task;
    }
}