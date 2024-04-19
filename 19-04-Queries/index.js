import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserSchema from './modals/user.schema.js';


const app = express();

app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
    res.send("It is Working..")
});

app.get("/filter-users", async (req, res) => {
    try {
        const { age } = req.body;

        // const users = await UserSchema.find();
        // const users = await UserSchema.find({ name: "yogesh", email: "yogesh@gmail.com"});
        // const users = await UserSchema.find({age: {$eq: 20}});
        // const users = await UserSchema.find({age: {$ne: 20}});
        // const users = await UserSchema.find({age: {$gt: 20}});
        // const users = await UserSchema.find({age: {$gte: 20}});
        // const users = await UserSchema.find({age: {$lt: 30}});
        // const users = await UserSchema.find({age: {$lte: 30}});
        // const users = await UserSchema.find({age: {$in: [10, 20]}});
        // const users = await UserSchema.find({age: {$nin: [10, 20]}});
        // const users = await UserSchema.find({contact: {$exists: true}});
        // const users = await UserSchema.find({$and: [{name: "yogesh"}, {email: "yogesh@gmail.com"}]});
        // const users = await UserSchema.find({$or: [{name: "yogesh"}, {email: "abc@gmail.com"}]});
        // const users = await UserSchema.find({age: {$not: {$lt: 20}}});
        // const users = await UserSchema.find({$nor: [{name: "yogesh"}, {email: "yogesh@gmail.com"}]});
        // const users = await UserSchema.find({contact: {$exists: true}});
        const users = await UserSchema.find({age: {$type: "number"}});

        return res.status(200).json({ success: true, messsage: "users found", users});
    } catch (error) {
        return res.status(500).json({ success: false, error})
    }
})

mongoose.connect(process.env.MONGODB_URL).then(() => console.log("Database Connected.."));

app.listen(3003, () => console.log("App is running on port 3003.."))