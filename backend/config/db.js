const mongoose = require("mongoose");

const connectDb = async ()=>{
    try {
        const connection = await mongoose.connect("mongodb+srv://ashutosht510:dmQGcPvB995rdqfA@cluster0.ate8l.mongodb.net/GymProject");
        console.log("Database is connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDb;