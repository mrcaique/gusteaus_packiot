import { Router, json } from "express";
import { CreateTodoController } from "./controllers/CreateTodoController";
import { GetAllTasksController } from "./controllers/GetAllTasksController";
import { DeleteTaskController } from "./controllers/DeleteTaskController";
import { UpdateTaskController } from "./controllers/UpdateTaskController";
import { GetTaskController } from "./controllers/GetTaskController";

const routes = Router();
routes.use(json());

routes.get("/tasks", new GetAllTasksController().handle);
routes.get("/tasks/:id", new GetTaskController().handle);
routes.post("/tasks", new CreateTodoController().handle);
routes.put("/tasks/:id", new UpdateTaskController().handle);
routes.delete("/tasks/:id", new DeleteTaskController().handle);

export{
    routes
};