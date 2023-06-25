const mongoose = require("mongoose");
require("dotenv").config();
const connectwithdb=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(console.log("db connected successfully"))
    .catch((err)=>{
        console.log("error in db connection")
         process.exit(1);
    })
};
module.exports= connectwithdb;