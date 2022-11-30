const itemsModel = require('../../models/items');

const updateItem = async (req, res) => {
    try {
        const author = req.body.author;
        const updateField = ["category", "status", "price", "title", 
                        "description", "address", "image", "isSelling"];
        const itemId = req.params.itemId;
        const item = await itemsModel.findById(itemId)
                                .select("_id category status price title image date isSelling idAuthor");
        if (String(author._id) !== item.idAuthor) res.status(403).send({msg: "Not authorized"});
        updateField.forEach(key => {
            item[key] = req.body[key];
        })
        const result = await item.save();
        res.status(200).send({item: result})
    } catch (error) {
        res.status(400).send({err: error})
    }
}

module.exports = updateItem;