import express from 'express';

const app = express();

app.use(express.json())

const users = [
    {id: 1, name: "yogesh", email: "yogesh@gmail.com"},
    {id: 2, name: "karan", email: "karan@gmail.com"},
    {id: 3, name: "anooj", email: "anooj@gmail.com"},
]

app.get("/", (req, res) => {
    res.send("it is working")
});

app.put('/update-data/:id', (req, res) => {
    try {

        const {name, email} = req.body;
        if(!name || !email) res.status(200).json({success: false, message: "All fields are required"})

        const userId = parseInt(req.params.id);
        // res.send(userId)
        if(!userId) res.status(404).json({success: false, message: "UserId is required"})

        const userData = users.find((user) => user.id === userId);
        if(!userData) res.status(401).json({success: false, message: "UserData is not found"})

        userData.name = name;
        userData.email = email;

        res.status(200).json({ success: true, message: "userdata updated successfully", updatedUserData: userData})
        // console.log(userData)
    } catch (error) {
        res.status(500).json({error: error, success: false})
    }
})


app.listen(3003, () => {
    console.log("server is listening on port 3003")
})