import { Router, json } from "express";
import { CreateTaskController } from "./controllers/CreateTaskController";
import { GetAllTasksController } from "./controllers/GetAllTasksController";
import { DeleteTaskController } from "./controllers/DeleteTaskController";
import { UpdateTaskController } from "./controllers/UpdateTaskController";
import { GetTaskController } from "./controllers/GetTaskController";

// Defining a router.
// Router is a middleware to provide common services to the main application.
const routes = Router();
routes.use(json());

// Setup PackIOT specific endpoints
routes.get("/tasks", new GetAllTasksController().handle);
routes.get("/tasks/:id", new GetTaskController().handle);
routes.post("/tasks", new CreateTaskController().handle);
routes.put("/tasks/:id", new UpdateTaskController().handle);
routes.delete("/tasks/:id", new DeleteTaskController().handle);

export {
    routes
};