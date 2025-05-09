import { Request, Response } from "express";
import ContactService from "../services/contact";


export class TodoController {

  async getTodos(req: Request, res: Response) {
    const list = await ContactService.getContacts();

    res.json({ contatos: list })
  }

  async deleteTodo(req: Request, res: Response) {
    const { name } = req.query;
    if (!name) {
      res.json({ error: "need to send a name to delete" });
    }

    await ContactService.deleteContact(name as string);

    res.json({ contato: name });
  }

  async postTodo(req: Request, res: Response) {
    const { name } = req.body;

    if (!name || name.length < 2) {
        res
        .status(400)
        .json({ error: "incomplete name, please check" });
    }

    await ContactService.createContact(name);

    res.status(201).json({ contato: name });
  }
}
