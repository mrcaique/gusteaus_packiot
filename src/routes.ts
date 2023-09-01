import { Router } from "express";
import { CreateTodoController } from "./controllers/CreateTodoController";

const routes = Router();

routes.post("/tasks", new CreateTodoController().handle);

export{
    routes
};