import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

title: String,

imageURL: String,

description: String

});

const User = mongoose.model('user', userSchema);

export default User;