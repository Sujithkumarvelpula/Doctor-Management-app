const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {

    console.log(process.env.MONGO_URL);
    
    await mongoose.connect(process.env.MONGO_URL);
 
 
    console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`Mongodb Server Issue ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
