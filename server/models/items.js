const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema(
    {
        idAuthor: {
            type: String,
            required: true
        },
        category: {
            type: String,
            enum: ['book', 'electronics', 'others'],
            required: true
        },
        status: {
            type: String,
            enum: ['used', 'new'],
            required: true
        },
        price: {
            type: NumberDecimal,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
        },
        image: {
            type: [String],
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        markDate: {
            type: Date,
            required: true
        }
    }
)
module.exports = mongoose.model("Items", itemSchema, "Items");
