import { Todo } from "../entities/Todo";
import { AppDataSource } from "../data-source";

export class GetAllTasksService {
    async execute() {
        const repo = AppDataSource.getRepository(Todo);

        const tasks = await repo.find();

        return tasks;
    }
}