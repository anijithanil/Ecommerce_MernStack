import mongoose from "mongoose";
import colors from "colors";

//mongo DB connecting
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB ${conn.connection.host}`.bgGreen.white)
    }catch (error){
        console.log(`Error in MongoDB ${error}`.bgRed.white)
    }
}

export default connectDB;