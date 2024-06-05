const express = require('express');

const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000 ;
// adding middleware
app.use(express.json());
// adding routes
const auth = require('./routes/auth')
// mounting routes
app.use('/api/v1',auth)

require("./config/database").connectWithDb();

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})

app.get("/",(req,res)=>{
    console.log("hello");
    res.send(`<h1>hello ji</h1>`)
})