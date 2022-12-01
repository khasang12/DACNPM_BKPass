const express = require('express')
const cors = require('cors')
const app = express();

const User = require("./models/users");
const dotenv = require("dotenv");
require("dotenv").config();

dotenv.config();
app.use(express.json())
const jwt = require("jsonwebtoken")
app.use(cors())

bcrypt = require('bcryptjs')

app.post('/api/register', async (req, res) => {
    try {
        const { name, gender, email, phoneNum, password,  image } = req.body
        if (!(name && gender && email && phoneNum && password && image)) {
            res.status(400).send({msg: "All input is required"})
        }
        else {
            const oldUser = await User.findOne({ email });
            if (oldUser) {
                res.status(409).send({msg: "User Already Exist. Please Login"})
            }
            else {
                encryptedPassword = await bcrypt.hash(password, 10)
    
                const newUser = await User.create({
                    name,
                    gender,
                    email: email.toLowerCase(),
                    phoneNum,
                    password: encryptedPassword,
                    image
                })
                const token = jwt.sign(
                    { user_id: newUser._id, email },
                    process.env.JWT_KEY,
                    {
                        expiresIn: "2h",
                    }
                );
                res.status(200).send({
                    email: newUser.email,
                    name: newUser.name,
                    phoneNum: newUser.phoneNum,
                    image: newUser.image,
                    token: token,
                    gender: newUser.gender
                });
            }
        }
    } catch (error) {
        res.status(400).send({err: error})
        console.log(error)
    }
})

app.post("/api/login", async (req, res) => {

    try {
        const { email, password } = req.body;
        
        // Validate user input
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        else {
            const user = await User.findOne({ email });
            if (user && (await bcrypt.compare(password, user.password))) {
                // Create token
                const token = jwt.sign(
                    { user_id: user._id, email },
                    process.env.JWT_KEY,
                    {
                        expiresIn: "2h",
                    }
                );
                res.status(200).send({
                    email: user.email,
                    name: user.name,
                    phoneNum: user.phoneNum,
                    image: user.image,
                    token: token,
                    gender: user.gender
                });
            }
            else res.status(400).send("Invalid Credentials");
        }
    } catch (err) {
        res.status(400).send({err: err})
        console.log(err);
    }
});

const route = require('./routes/index');
app.use('/api', route);

app.listen(5000, () => { console.log("Server started on 5000"); })

const connectDB = require("./config/db");

connectDB();