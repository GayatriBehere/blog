import express from 'express';
import deleteUser  from './Controller/Deleteblog.js';
import bodyParser from 'body-parser';
import dbConnect from './config/database.js';
import blogPosts from './data.js';
import User from './models/userModel.js';
import { signUp } from './Controller/SignUp.js';
import {  configDotenv } from 'dotenv';
configDotenv();

dbConnect();

const app = express();

app.use(express.json());
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/blogs', (req, res) => {
    res.render('blogs', { blogPosts });
});

app.get('/create-blog', (req, res) => {
    res.render('create_blog');
});


// app.post('/create-blog', (req, res) => {
//     const { title,imageURL, description} = req.body;
//     const newBlog = {
//         id: blogPosts.length + 1,
//         title: title,
//         imageURL: imageURL,
//         description: description
//     };
//     blogPosts.push(newBlog);
//     res.redirect('/blogs');
// });

app.get('/users', async (req, res) => {
    try {
        // Retrieve users from the database
        const users = await User.find({});
        // Render the 'users' EJS template and pass the 'users' data to it
        res.render('blogs', { users });
       
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send("Internal Server Error");
    }
});


// app.get('/Delete/:id', (req, res) => {
//     res.render('del');
    
// });


app.post('/create-blog',signUp);

// app.post('/UserSignUp',signUp);


app.post('/Delete/:id',deleteUser);





app.listen(4000, ()=>{
      console.log("Server Listening on Port 4000")
}) 


