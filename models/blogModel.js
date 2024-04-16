import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: String,
    imageURL: String,
    description: String
});

const Blog = mongoose.model('blog', blogSchema);

export default Blog;