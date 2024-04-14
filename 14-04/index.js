import express from 'express';
import AllRoutes from "./routes/index.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("It is Working")
});

app.use("/api/v1", AllRoutes)


app.listen(3003, () => console.log("server is running on port 3003"));