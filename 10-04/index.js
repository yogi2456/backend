import express from 'express'

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("It is Working")
})

app.post('/register', (req, res) => {
    try {
        console.log(req.body, "request body")
        const {name, email, password, confirmpassword} = req.body;
        // console.log(name, email, password, confirmpassword, "userData")
        if(!name || !email || !password || !confirmpassword) {
            res.send("All fields are required")
        } 
        if(password !== confirmpassword) {
            res.send("password and confirmpassword not matched")
        }

        //store data in mongodb
        
        res.send("Registration Succesfull")
    } catch (error) {
        res.send(error);
    }
})

app.listen(3003, () => console.log("app is running on port 3003"))