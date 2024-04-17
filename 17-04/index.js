import express from "express";
import AllRoutes from "./routes/index.js"
import { isValidToken } from "./middleware/user.middleware.js";

const app = express();

app.use(express.json());

// app.use(isValidToken);

// app.use((req, res, next) => {
//     const {isCompletedAssignment} = req.body;
//     if(isCompletedAssignment === "true") {
//         next();
//     } else {
//         res.send("please complete the Assignment")
//     }
// });

app.post("/", isValidToken, (req, res) => {
    res.send("It is Working")
});


app.use((error, req, res, next) => {
    if(error) {
        res.send("error");
    } else {
        next()
    }
})
app.post("/hi", (req, res ) => {
    res.send("hii")
})

app.use("/api/v1", AllRoutes);


app.listen(3003, () => {
    console.log("App is running on port 3003")
});