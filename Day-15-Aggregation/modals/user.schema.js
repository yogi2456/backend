import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    confirmPassword: String
});

const UserSchema = mongoose.model("Users", userSchema);

export default UserSchema;