import express from 'express';
import Connections from './database/db.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT =8000;
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

Connections(USERNAME, PASSWORD);

app.listen(PORT,()=>console.log(`Server is running on port ${PORT} hello`));