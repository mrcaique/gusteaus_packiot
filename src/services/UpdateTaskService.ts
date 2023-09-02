import { AppDataSource } from "../data-source";
import { Todo } from "../entities/Todo";

type TodoUpdateRequest = {
    id: string,
    title: string,
    description: string;
}

export class UpdateTaskService {
    async execute({id, title, description} : TodoUpdateRequest) {
        const repo = AppDataSource.getRepository(Todo);

        const task = await repo.findOneBy({id : id});

        if (!task) {
            return new Error("Task does not exists!");
        }

        task.title = title ? title : task.title;
        task.description = description ? description : task.description;

        await repo.save(task);

        return task;
    }
}