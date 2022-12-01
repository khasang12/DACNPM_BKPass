const itemsModel = require('../../models/items');

const markItem = async (req, res) => {
    try {
        const author = req.body.author;
        const item = await itemsModel.findById(req.params.itemId)
                                .select("markBy numConcerner");
        if ((item.markBy).findIndex(ele => ele === String(author._id)) < 0){
            item.markBy.push(author._id);
            item.numConcerner = item.numConcerner + 1;
            await item.save();
        } 
        res.status(200).send({})
    } catch (error) {
        res.status(400).send({err: error})
    }
}

module.exports = markItem;