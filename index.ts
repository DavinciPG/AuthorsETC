import express, { Express, Request, Response } from "express";

import articleController from "./controllers/articleController";
import commentController from "./controllers/commentController";
import authorController from "./controllers/authorController";

const app: Express = express();

import mongoose from "mongoose";

mongoose.connect("mongodb+srv://erkiparna:vdY205oKLqr1RLPe@cluster0.uod5eyl.mongodb.net/");
const database = mongoose.connection;

database.on('error', (error: Error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', articleController);
app.use('/', commentController);
app.use('/', authorController);

app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});