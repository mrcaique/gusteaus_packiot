import { getDataSource } from "../data-source";
import { Todo } from "../entities/Todo";

// Informations needed to update a task.
type TodoUpdateRequest = {
    id: string,
    title: string,
    description: string;
}

export class UpdateTaskService {
    /**
     * Service resposible to update a specific task.
     * 
     * @param param0 - Informations needed to update a task, i.e., id, title,
     *  and description.
     * @returns If task does not exists, an Error is thrown, otherwise, is
     *  returned the updated task.
     */
    async execute({id, title, description} : TodoUpdateRequest) {

        // Layer responsible to communicate with the database.
        const AppDataSource = await getDataSource();
        const repo = AppDataSource.getRepository(Todo);

        const task = await repo.findOneBy({id : id});

        if (!task) {
            return new Error("Task does not exists!");
        }

        // If there is no new title and/or description, maintain what was
        // left before.
        task.title = title ? title : task.title;
        task.description = description ? description : task.description;

        await repo.save(task);

        return task;
    }
}