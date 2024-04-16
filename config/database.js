import mongoose from "mongoose";

const dbConnect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected");
    } catch (error) {
        console.log("Error",error);
    }
}
export default dbConnect;