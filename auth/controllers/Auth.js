const bcrypt = require('bcrypt');
const User = require("../models/user")
const jwt = require("jsonwebtoken")

exports.signup = async (req,res) => {
    try {
        const { name, email, password,role } = req.body 
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" })
        }
        // secure passward
        let hashedPassword;
        try {
             hashedPassword = await bcrypt.hash(password, 10);
        }
        
           
        catch (error) {
            res.status(500).json({ message: "passward did not hashed  error" })}

            // create entry of the user
            const user = await User.create({ name, email, password: hashedPassword,role })
           return res.status(200).json({ message: "user created" })} catch (error) {
res.status(500).json({ message: "user not created"  })
    }
}