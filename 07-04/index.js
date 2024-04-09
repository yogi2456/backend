const express = require("express")

const app = express();

app.get("/", (req, res) => {
    res.send("welcome")
})

app.get("/hi", (req, res) => {
    res.send("hello")
})

app.get("/login", (req, res) => {
    res.send("login" )
})

app.get("/register", (req, res) => {
    res.send("register ")
})


app.listen(3002, () => {
    console.log("App is running on port 3002")
})