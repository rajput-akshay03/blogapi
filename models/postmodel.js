const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        body:{
            type:String,
            required:true,
        },
        likes:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Like",
            required:true,
        }],
        comments:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment",
            required:true,
        }]
    }
)






module.exports = mongoose.model("Post",postSchema);