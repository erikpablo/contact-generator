import express from 'express';
import helmet from 'helmet';
import { todoRouter } from './routes/todo.route';

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', todoRouter)


export { app };
