import { Todo } from "../entities/Todo";
import { AppDataSource } from "../data-source";

type TodoViewRequest = {
    id: string,
    title: string,
    description: string
};

export class GetTaskService {
    async execute({id, title, description} : TodoViewRequest) {
        const repo = AppDataSource.getRepository(Todo);

        const task = await repo.findOneBy({id : id});

        if (!task) {
            return new Error("Task does not exists!");
        }

        return task;
    }
}