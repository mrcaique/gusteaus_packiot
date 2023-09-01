import { Todo } from "../entities/Todo";
import { AppDataSource } from "../data-source";

type TodoRequest = {
    title: string,
    description: string;
}

export class CreateTodoService {
    async execute({title, description} : TodoRequest) : Promise<Todo> {
        const repo = AppDataSource.getRepository(Todo);

        const todo = repo.create({
            title,
            description
        })

        await repo.save(todo);
        return todo;
    }
}