import { App } from "./app";
import dotenv from 'dotenv';
dotenv.config();
const PORT = Number(process.env.API_PORT);

new App().start(PORT)