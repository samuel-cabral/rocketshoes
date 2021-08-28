import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import 'reflect-metadata';

import './database';
import { routes } from './routes';

dotenv.config({
  path: path.join(__dirname, '../.env'),
});

const app = express();
app.use(express.json());
app.use(routes);

export { app };
