import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AllRoutes from './routes/index.js';
import cors from 'cors';

var corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
};

const app = express();

app.use(express.json());
dotenv.config();
app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.send("It is Working")
});

app.use("/api/v1", AllRoutes);


mongoose.connect(process.env.MONGODB_URL).then(() => {console.log("Database Connected..")});


app.listen(3003, () => console.log("App is running on port 3003"));