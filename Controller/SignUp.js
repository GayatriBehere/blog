import User from "../models/userModel.js"; 
   
   
export const signUp = async (req, res) => {

    try {
    
    const { title,imageURL, description} = req.body;
    console.log(title,imageURL, description);
    const newUser = new User({
    
        title,
        imageURL,
        description
    
    });
    console.log("yes",newUser);
    const savedUser = await newUser.save();


       res.redirect('/users');
    // res.status(200).json({
    
    // message: "Account created successfully",
    
    // user: savedUser
    
    // })
    
    } catch (error) {
    
    console.log("Error creating account",error);
    
    return res.status(500).json({
    
    success: false,
    
    message: "User cannot be registered. Please try again.",
    
    });
    
    }
}

