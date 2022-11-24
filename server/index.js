const express = require('express')
const cors = require('cors')
const app = express();
const dotenv = require("dotenv");
require("dotenv").config();
bcrypt = require('bcryptjs')
dotenv.config();
app.use(express.json())
app.use(cors())

const userRoutes = require('./routes/userRoutes')




app.use("/", userRoutes)

app.listen(5000, () => { console.log("Server started on 5000"); })

const connectDB = require("./config/db");

connectDB();