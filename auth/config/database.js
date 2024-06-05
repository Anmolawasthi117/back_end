const mongoose = require('mongoose');

require("dotenv").config();

exports.connectWithDb = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }) 
    .then(console.log(`DB Get Connected`))
    .catch(error => {
        console.log(`DB Connection Failed`);
        console.log(error);
        process.exit(1);
    })
}

