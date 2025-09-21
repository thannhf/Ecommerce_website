import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}Shopprr`)
        console.log("database connected");
    } catch (error) {
        console.log("database connection failed", error.message)
    }
}

export default connectDB;