const itemsModel = require('../../models/items');

const postItem = async (req, res) => {
    try {
        const author = req.body.author;
        const data = req.body.item;
        const idAuthor = author._id;
        const date = new Date();
        const item = {...data, idAuthor, date}
        const newItem = new itemsModel(item);
        const result = await newItem.save();
        res.status(200).send({item: result})
    } catch (error) {
        res.status(400).send({err: error})
    }
}

module.exports = postItem;