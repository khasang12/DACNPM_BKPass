const itemsModel = require('../../models/items');

const deleteItem = async (req, res) => {
    try {
        const author = req.body.author;
        const itemId = req.params.itemId;
        const item = await itemsModel.findById(itemId)
                                .select("_id idAuthor");
        if (String(author._id) !== item.idAuthor) res.status(403).send({msg: "Not authorized"});
        await itemsModel.deleteOne({_id: itemId});
        res.status(200).send({})
    } catch (error) {
        res.status(400).send({err: error})
    }
}

module.exports = deleteItem;