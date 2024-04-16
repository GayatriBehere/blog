import Blog from "../models/blogModel.js";

export const createBlog = async (req, res) => {
    try {

        const { title, imageURL, description } = req.body;

        const newBlog = new Blog({
            title,
            imageURL,
            description
        });

        const savedBlog = await newBlog.save();

        console.log("New Blog Added: ", savedBlog)

        res.redirect('/blogs');

    } catch (error) {
        console.log("Error creating new blog", error);

        res.status(500).json({
            success: false,
            message: "Blog cannot be added"
        })
    }
} 

export const deleteBlog = async (req, res) => {
    try {
        const blogId = req.params.id;
        console.log(blogId);

        await Blog.findByIdAndDelete(blogId);

        res.redirect('/blogs');

    } catch (error) {
        console.log("Error deleting blog", error);
        return res.status(500).json({
            success: false,
            message: "Blog cannot be deleted. Please try again."
        });
    }
}
