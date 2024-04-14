import express from 'express'


const app = express();

app.use(express.json())

const students = [
    {id:1, name: "yogesh", email: "yogesh@gmail.com"},
    {id:2, name: "karan", email: "karan@gmail.com"},
    {id:3, name: "anooj", email: "anooj@gmail.com"},   
];

app.get('/', (req, res) => {
    res.send("it is working")
});

app.delete('/delete-user/:id', (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        if(!userId)
        return res.status(404).json({success: false, message: "user id is required"})
        // console.log(userId, "user")

        const user = students.findIndex((user) => user.id === userId);
        
        console.log(user, "user")
        if(user === -1)
        return res.status(401).json({success: false, message: "user not found"})

        students.splice(user, 1)
        return res.status(200).json({success: false, message: "deleted succesfully", updatedUserList: students});
        
    } catch (error) {
        return res.status(500).json({success: false, error: error})
    }
})


app.listen(3003, () => console.log("server is running on port 3003"))