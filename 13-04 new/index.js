import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Register } from './controllers/user.controller.js';

const app = express();

app.use(express.json());

dotenv.config();

app.get("/", (req, res) => {
    res.send("it is working")
});

app.post("/register", Register)

mongoose.connect(process.env.MONGODB_URL).then(() => console.log("Database Connected"));

app.listen(3003, () => {console.log("App is running on port 3003")});