import { Router, json } from "express";
import { CreateTodoController } from "./controllers/CreateTodoController";
import { GetAllTasksController } from "./controllers/GetAllTasksController";
import { DeleteTaskController } from "./controllers/DeleteTaskController";

const routes = Router();
routes.use(json());

routes.post("/tasks", new CreateTodoController().handle);
routes.get("/tasks", new GetAllTasksController().handle);
routes.delete("/tasks/:id", new DeleteTaskController().handle)

export{
    routes
};