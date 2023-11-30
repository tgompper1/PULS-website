// MONGO DB connection
const mongoose = require('mongoose');
const config  = require('config');
const db = config.get('mongoURI');


const connectDB = async () => {
  
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(db);
    console.log(`Database Connected...`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

}

module.exports = connectDB;