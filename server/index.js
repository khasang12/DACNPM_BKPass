const express = require('express')
const cors = require('cors')
const app = express();
const userRoutes = require('./routes/userRoutes')

const dotenv = require("dotenv");

dotenv.config();

app.use(cors())
app.use(express.json())
app.use("/api/auth",userRoutes)

app.get('/api', (req, res) => {
    res.json({ "msg": ["A", "B", "C"] })
})

app.listen(5000, () => { console.log("Server started on 5000"); })

const connectDB = require("./config/db");

connectDB();