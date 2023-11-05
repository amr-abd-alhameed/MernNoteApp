import mongoose from "mongoose";export const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URI, {
    //useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: true,
  });
  console.log(`mongoDB connection : ${conn.connection.host}`);
};
