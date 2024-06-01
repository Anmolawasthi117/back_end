// import mongoose
const mongoose = require('mongoose');


// route handler

const likeSchema = new mongoose.Schema({
    post :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'//refrense to the post model
    },
    user:{
        type: String,
        required: true,
    },
   
});


// export model
module.exports = mongoose.model('Like', likeSchema);