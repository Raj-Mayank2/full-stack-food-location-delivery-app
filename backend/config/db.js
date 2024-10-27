import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://mayank170403:mayank84@cluster0.yunqc.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}