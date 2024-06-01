const express = require('express'); 
const router = express.Router();

const {createComment} = require('../controllers/commentController')
const {createPost,getallPost} = require('../controllers/postController')
const {likepost,unlikepost} = require('../controllers/likeController')

router.post("/comment/create", createComment)
router.post("/post/create", createPost)
router.get("/posts", getallPost)
router.post("/like", likepost)
router.post("/unlike", unlikepost)

module.exports = router;
