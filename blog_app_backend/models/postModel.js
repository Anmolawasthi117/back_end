// import mongoose
const mongoose = require('mongoose');


// route handler

const postSchema = new mongoose.Schema({
        title: {
            type: String,
            required: [true,"title required"]
        },
        body: {
            type: String,
            required: [true,"body required"]
        },
        likes:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like'
        }],
        comments:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }]
});


// export model
module.exports = mongoose.model('Post', postSchema);