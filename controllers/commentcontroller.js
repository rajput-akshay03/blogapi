const Post = require("../models/postmodel");
const Comment = require("../models/commentmodel");
exports.createComment = async(req,res)=>{
    try{
           const {post,user,body} = req.body;
    
           const comment = new Comment({
            post,user,body
           });
           const savedComment = await comment.save(); //or use mongoode.create
           const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true}) // new true se updated document return hoga
               .populate("comments")  // populate the comment array with comment documents
                .exec();
               res.json({
                post:updatedPost,
               })
    }
    catch(err)
    {
            return  res.status(500).json({
                error:"error while commenting",
              })
    }
} 