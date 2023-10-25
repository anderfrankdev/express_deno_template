import mongoose from "npm:mongoose";
const dbConnection = async (uri:string) => {
  try {
    await mongoose.connect(uri);

    console.log("Data base runnig");
  } catch (err) {
    console.log(err);
    //throw new Error("Connection error")
  }
};

export default dbConnection;
