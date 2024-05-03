import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import AllRoutes from './routes/index.js';


const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

app.get('/', (req, res) => {
    res.send("It is Working..")
});

app.use("/api/v1", AllRoutes);

mongoose.connect(process.env.MONGODB_URL).then(() => {console.log("Database Connected..")})

app.listen(3003, () => console.log("server is running on port 3003."))