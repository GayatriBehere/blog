import express from 'express';
import bodyParser from 'body-parser';
import dbConnect from './config/database.js';
import Blog from './models/blogModel.js';
import { createBlog, deleteBlog } from './Controller/crud.js';
import { configDotenv } from 'dotenv';

configDotenv();

dbConnect();

const app = express();

app.use(express.json());
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res)=>{
    res.redirect('/blogs')
})

app.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find({});
        res.render('blogs', { blogs });
    } catch (error) {
        console.error("Error fetching blogs:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/create-blog', (req, res) => {
    res.render('create_blog');
});

app.post('/create-blog', createBlog);

app.post('/delete/:id', deleteBlog);


app.listen(4000, () => {
    console.log("Server Listening on Port 4000")
})


