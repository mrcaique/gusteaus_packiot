import "reflect-metadata";
import express from "express";
import "./database/migrations/1693547697092-CreteToDo"
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);
app.listen(3000, () => console.log("Server is running..."));