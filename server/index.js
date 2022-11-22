const express = require('express')
const cors = require('cors')
const app = express();

const User = require("./models/users");
const dotenv = require("dotenv");
require("dotenv").config();

const userRoutes = require('./routes/userRoutes')


dotenv.config();
app.use(express.json())
const jwt = require("jsonwebtoken")
app.use(cors())

bcrypt = require('bcryptjs')

app.post('/register', async (req, res) => {
    try {
        const { name, gender, email, phoneNum, password, retypePassword, image } = req.body
        if (!(name && gender && email && phoneNum && password && retypePassword && image)) {
            res.status(400).send("All input is required")
        }
        if (password != retypePassword) {
            res.status(400).send("Password does not match. Please try again!")
        }
        const oldUser = await User.findOne({ email });
        if (oldUser) {
            console.log(oldUser)
            return res.status(409).send("User Already Exist. Please Login")
        }
        encryptedPassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({
            name,
            gender,
            email: email.toLowerCase(),
            phoneNum,
            password: encryptedPassword,
            image
        })
        print("Created account successfully.")
        const token = jwt.sign(
            { user_id: newUser._id, email },
            process.env.JWT_KEY,
            {
                expiresIn: "2h",
            }
        );
        newUser.token = token;
        res.status(201).json(newUser);
    } catch (error) {
        console.log(error)
    }
})

app.post("/login", async (req, res) => {

    try {
        const { email, password } = req.body;
        
        // Validate user input
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await User.findOne({ email });
        console.log(user)
        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.JWT_KEY,
                {
                    expiresIn: "2h",
                }
            );
            user.token = token;
            res.status(200).json(user);
        }
        res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
    }
});

app.listen(5000, () => { console.log("Server started on 5000"); })

const connectDB = require("./config/db");

connectDB();