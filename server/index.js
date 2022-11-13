const express = require('express')
const cors = require('cors')
const app = express();

const dotenv = require("dotenv");
dotenv.config();

app.use(cors())

app.get('/api', (req, res) => {
    res.json({ "msg": ["A", "B", "C"] })
})

app.listen(5000, () => { console.log("Server started on 5000"); })

const connectDB = require("./config/db");
connectDB();