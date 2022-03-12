const mongoose = require('mongoose');


const connectDB = async()=>{
    return await mongoose.connect(process.env.MongoATLSCONNECTIONSTRING).then((result)=>{
        console.log("connected to database");
    }).catch((err)=>{
        console.log("connection error",err);
    })
}

module.exports = connectDB
