// import mongoose
const mongoose = require('mongoose');


// route handler

const commentSchema = new mongoose.Schema({
    post :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'//refrense to the post model
    }
});


// export model