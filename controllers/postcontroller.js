const Post = require("../models/postmodel");
exports.createPost = async(req,res)=>{
    try{
        const {title,body} = req.body;
        const post = await Post.create({title,body});
        res.status(200).json({
          success:true,
          data:post,
          message:"post created successfully",
        })
    }
    catch(err)
    {
            console.log(err);
          return res.status(500).json({
                success:false,
                message:err.message,
            })
    }    
};
exports.getAllPosts = async(req,res)=>{
     try{
              const post = await Post.find().populate("comments").populate("likes");
              res.json(
                {
                    data:post,
                }
              )
     }
     catch(err)
     {
              console.log(err)
             return res.status(400).json(
                {
                   error:"error while fetching the post",
                }
              );
     }

};