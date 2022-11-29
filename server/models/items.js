const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema(
    {
        idAuthor: {
            type: String,
            required: true
        },
        category: {
            type: String,
            enum: ['Sách', 'Thiết bị số', 'Vật dụng khác'],
            required: true
        },
        status: {
            type: String,
            enum: ['Đã sử dụng', 'Hàng mới'],
            required: true
        },
        price: {
            type: Number,
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
