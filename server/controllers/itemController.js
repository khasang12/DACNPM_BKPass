const Items = require("../models/items");

module.exports.insertItem = async (req, res, next) => {
    try {
        const { idAuthor, category,
        item_status,
        price,
        header,
        desc,
        img} = req.body;

        // add to DB
        const item = new Items({
            idAuthor: idAuthor,
            category: category,
            status: item_status,
            price: parseFloat(price.slice(0, -3)),
            title: header,
            description: desc,
            image: img.map((i)=>i[0]),
            date: new Date(0),
            markDate: new Date(0)
        })
        let resultItem = await item.save();

        return res.json({ status: true, data:resultItem._id });
    } catch (ex) {
        next(ex);
    }
}

module.exports.getItem = async (req, res, next) => {
    try {
        const item = await Items.findById(req.query.id)
        return res.json(item);
    } catch (ex) {
        next(ex);
    }
}