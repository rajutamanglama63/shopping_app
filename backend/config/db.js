require("dotenv").config();

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongoDB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connection established...")
    } catch (error) {
        console.error("MongoDB connection failed...");
        process.exit(1);
    }
}

module.exports = connectDB;