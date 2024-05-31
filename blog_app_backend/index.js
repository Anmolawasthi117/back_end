const express = require('express');

const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000 ;

app.use(express.json());

const blog = require('./routes/blog')
// mount 
app.use('/api/v1',blog)

const connectWithDb = require('./config/database')
connectWithDb();

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})

app.get("/",(req,res)=>{
    console.log("hello");
    res.send(`<h1>hello ji</h1>`)
})