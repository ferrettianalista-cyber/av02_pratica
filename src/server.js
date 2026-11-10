
import 'dotenv/config';
import express from 'express';
import { knex } from './database/knex.js';
import { jogosRouter } from '.jogos/routes/.route.js';


const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use('/jogos', jogosRouter);


const server = app.listen(port, () => console.log(`App rodando em http://localhost:${port}`));

