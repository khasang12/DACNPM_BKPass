const itemsModel = require('../../models/items');
const usersModel = require('../../models/users');

const getItemDetail = async (req, res) => {
    try {
        const user = req.body.author;
        const itemId = req.params.itemId;
        const item = await itemsModel.findById(itemId)
                                    .select("_id category status price title image date isSelling idAuthor markBy");
        if (!item) res.status(404).send({msg: "item not found"});
        if (user) item.isMarked = item.markBy.findIndex(ele => ele === user._id);
        else item.isMarked = false;
        const saler = await usersModel.findById(item.idAuthor)
                                    .select("name image");
        if (!saler) res.status(404).send({msg: "saler not found"});
        item.authorName = saler.name;
        item.authorImage = saler.image;
        res.status(200).send({item: item});
    } catch (error) {
        res.status(400).send({err: error})
    }
}

module.exports = getItemDetail;