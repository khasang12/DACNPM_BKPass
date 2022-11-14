const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema(
    {
        category: {
            type: String, 
            enum: ['book', 'electronics', 'others'],
            required: true
        },
        status:{
            type: String,
            enum: ['used', 'new'],
            required: true
        },
        price:{
            type: NumberDecimal,
            required: true
        },
        title:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        tag: {
            type: String,
            required: true
        },
        image: {
            type: [String],
            required: true
        }
    }
)
module.exports = mongoose.model("Items", itemSchema, "Items");
