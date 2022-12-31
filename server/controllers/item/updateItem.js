const itemsModel = require('../../models/items');

const updateItem = async (req, res) => {
    try {
        const author = req.body.author;
        const updateField = ["category", "status", "price", "title", 
                        "description", "address", "image", "isSelling"];
        const itemId = req.params.itemId;
        console.log(itemId);
        const item = await itemsModel.findById(itemId)
                                .select("_id category status price title image date isSelling idAuthor");
        const req_item= req.body["item"]?req.body["item"]:{isSelling:false};
        const req_author = req.body["author"];
        if (String(req_author._id) !== item.idAuthor)
          res.status(403).send({ msg: "Not authorized" });
        updateField.forEach(key => {
            if (req_item[key] != null && req_item[key] !== "") {
              item[key] = req_item[key];
            }
        })
        const result = await item.save();
        res.status(200).send({item: result})
    } catch (error) {
        res.status(400).send({err: error})
    }
}

module.exports = updateItem;