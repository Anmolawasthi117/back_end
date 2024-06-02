// import mongoose
const mongoose = require('mongoose');


// route handler

const commentSchema = new mongoose.Schema({
    post :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'//refrense to the post model
    },
    user:{
        type: String,
        required: [true,"user required"],
    },
    body:{ 
        type: String,
        required: [true,"body required"],
    }
});


// export model
module.exports = mongoose.model('Comment', commentSchema);