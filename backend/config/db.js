import mongoose, { mongo } from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect("mongodb+srv://RitenChaudhari:6353601773@cluster0.hrn5hqr.mongodb.net/Food-Del").then(() => console.log("DB connected")); 
}