import express from 'express';
const app = express();
import bodyParser from 'body-parser';


import blogPosts from './data.js';

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/blogs', (req, res) => {
    res.render('blogs', { blogPosts });
});

app.get('/create-blog', (req, res) => {
    res.render('create_blog');
    
});


app.post('/create-blog', (req, res) => {
    const { title,imageURL, description} = req.body;
    const newBlog = {
        id: blogPosts.length + 1,
        title: title,
        imageURL: imageURL,
        description: description
    };
    blogPosts.push(newBlog);
    res.redirect('/blogs');
});


app.listen(4000, ()=>{
      console.log("Server Listening on Port 4000")
     }) 