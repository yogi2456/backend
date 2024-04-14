import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
});

const UserSchema = mongoose.model("User", userSchema);

export default UserSchema;