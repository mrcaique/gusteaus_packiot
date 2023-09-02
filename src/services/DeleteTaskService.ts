import { Todo } from "../entities/Todo";
import { AppDataSource } from "../data-source";

export class DeleteTaskService {
    async execute(id : string) {
        const repo = AppDataSource.getRepository(Todo);

        if (!(await repo.findOneBy({id : id}))) {
            return new Error("Task does not exist!");
        }

        await repo.delete(id);
    }
}