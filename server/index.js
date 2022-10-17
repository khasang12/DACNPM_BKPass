const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/api', (req, res) => {
    res.json({ "msg": ["A", "B", "C"] })
})

app.listen(5000, () => { console.log("Server started on 5000"); })