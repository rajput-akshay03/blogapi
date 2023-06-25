const Like  = require("../models/likemodel");
const Post = require("../models/postmodel")
exports.likePost =async(req,res)=>{
        try{ 
            const {post,user}= req.body;
            const like = await Like.create({post,user});
            const p = await Post.findByIdAndUpdate(post,{$push:{likes:like._id}},{new:true}).populate("likes").exec();
            res.json(
                {
                    data:p,
                }
            )
        }
        catch(err)
        {
        console.log(err)
           return res.status(400).json(
            {
                message:"error in liking"
            }
           )
        }
};
exports.unlikePost = async(req,res)=>{
      try{
             const {post,like} = req.body;
            const unlike = await Like.findByIdAndDelete(like);
                const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:like}} ,{new:true});
                res.json({
                    data:updatedPost
                })
      }
      catch(err)
      {
            console.log(err)
            res.status(400).json({
                message:"error in deleting"
            })
      }

}