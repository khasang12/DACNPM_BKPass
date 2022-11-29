const express = require('express')
const cors = require('cors')

const userRoutes = require('./routes/userRoutes')
const itemRoutes = require('./routes/itemRoutes')
const dotenv = require("dotenv");

const app = express();
require("dotenv").config();

dotenv.config();
app.use(express.json())
app.use(cors())
app.use(express.json())
app.use("/api/auth",userRoutes)
app.use("/api",itemRoutes)

app.listen(5000, () => { console.log("Server started on 5000"); })

const connectDB = require("./config/db");

connectDB();