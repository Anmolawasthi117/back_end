const Like = require("../models/likeModel");
const Post = require("../models/postModel");

exports.likepost = async (req,res) => {
    try {
        const { user,post} = req.body;
    // create a like object
    const like = new Like({ user, post});
    // save new like into database
   const savedlikes = await like.save();
    // find the post by id then update the likes array
    const updatedPost = await Post.findByIdAndUpdate(post, {
      $push: { likes: savedlikes._id },
    },{new:true}).populate('likes').exec();//populate comments array with like documents or data
    res.json({ 
        post: updatedPost,
        like: savedlikes,
    }) 
    } catch (error) {
        return res.status(400, error).json({error});
    }
}

// unlike post
exports.unlikepost = async (req, res) => {
    try {
        const { user,post} = req.body;
    // find and delete the like by user and post
    const deletedlike = await Like.findOneAndDelete({post:post,_id:like});
    // update the post by id then update the likes array
    const updatedPost = await Post.findByIdAndUpdate(post, {
      $pull: { likes: deletedlike._id },
    },{new:true}).populate('likes').exec();
    res.json({
        post: updatedPost,
    })
    } catch (error) {
        return res.status(400, error).json({error});
    }
}