const mongoose = require("mongoose");
//const colors = require("colors");


const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/bloodbankdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connect TO MongoDB Database `.green.white);
  } catch (error) {
    console.error(`somthing error`.bgRed.white);
    console.error(error.message);
    process.exit(1);
  }
};
module.exports = connectDB;