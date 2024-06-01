// import models
const Post = require("../models/postModel");
const Comments = require("../models/commentModel");


// business logic
exports.createComment = async (req, res) => {
  try {
    // fetch data from body
    const { user,post, body} = req.body;
    // create a comment object
    const comment = new Comments({ user, post, body});
    // save new comment into database
   const savedComment = await comment.save();
    // find the post by id then update the comments array
    const updatedPost = await Post.findByIdAndUpdate(post, {
      $push: { comments: savedComment._id },
    },{new:true}).populate('comments').exec();;//populate comments array with comment documents or data
    res.json({
        post: updatedPost,
        comment: savedComment,
    }) 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 