const express= require("express");
const router = express.Router();
const {createComment} = require("../controllers/commentcontroller");
const {createPost,getAllPosts} = require("../controllers/postcontroller");

const {dummylink,likePost,unlikePost} = require("../controllers/likecontroller")
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likePost);
router.delete("/likes/unlike",unlikePost);
module.exports = router;