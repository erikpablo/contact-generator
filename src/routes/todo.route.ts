import { Router } from "express";
import { TodoController } from "../controllers/todoController";

const todoRouter = Router();

const todoController = new TodoController();

todoRouter.post("/contato", todoController.postTodo);

todoRouter.get("/contatos", todoController.getTodos);

todoRouter.delete("/contato", todoController.deleteTodo);

export { todoRouter };
