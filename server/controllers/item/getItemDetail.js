const itemsModel = require('../../models/items');
const usersModel = require('../../models/users');

const getItemDetail = async (req, res) => {
    try {
        const user = req.body.author;
        const itemId = req.params.itemId;
        const item = await itemsModel.findById(itemId)
                                    .select("_id category status price title image date isSelling idAuthor markBy description");
        const chooseField = ["_id", "category", "status", "price", "title", "image", "date", "isSelling", "idAuthor", "description"]
        if (!item) res.status(404).send({msg: "item not found"});
        const result = {};
        if (user) result.isMarked = item.markBy.findIndex(ele => ele === String(user._id)) >= 0;
        else result.isMarked = false;
        chooseField.forEach((field) => result[field] = item[field])
        const saler = await usersModel.findById(item.idAuthor)
                                    .select("name image");
        if (!saler) res.status(404).send({msg: "saler not found"});
        result.authorName = saler.name;
        result.authorImage = saler.image;
        res.status(200).send({item: result});
    } catch (error) {
        res.status(400).send({err: error})
    }
}

module.exports = getItemDetail;