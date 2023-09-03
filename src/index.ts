import "reflect-metadata";
import express from "express";
import "./database/migrations/1693547697092-CreteToDo"
import { routes } from "./routes";

// Start app and call the middleware to execute all routes.
const app = express();
app.use(express.json());
app.use(routes);

export {
    app
};