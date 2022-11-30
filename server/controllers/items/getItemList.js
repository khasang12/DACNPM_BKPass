const itemsModel = require('../../models/items');
const usersModel = require('../../models/users');

const getItemList = async (req, res) => {
    try {
        const searchPattern = {isSelling: true};
        const user = req.body.author;
        const pageNum = parseInt(req.query.page? req.query.pageNum : 1);
        const limit = parseInt(req.query.limit? req.query.limit : 10);
        const filter = {
            "author" : "idAuthor",
            "category" : "category",
            "name" : "title",
            "status" : "status",
            "markby" : "markBy"
        }
        for (const key in filter) {
            searchPattern[filter[key]] = req.query[key];
        }
        const sortType = {
            "time" : {
                date: -1
            },
            "priceDown" : {
                price: -1
            },
            "priceUp" : {
                price: 1
            },
            "numConcern" : {
                numConcerner: -1
            }
        }
        const start = limit * (pageNum - 1);
        const end = limit * pageNum;
        const itemsList = await itemsModel.find(searchPattern)
                                    .limit(end)
                                    .sort(sortType[req.query.sortby])
        if ((end <= 0) || (start > salers.length)) {
            res.status(400).send({msg: "Invalid page num"});
        }
        else {
            const chosenItems = itemsList.slice(start, end);
            const result = []
            const chooseField = ["_id", "category", "status", "price", "title", "image", "date", 
                                "isMarked", "isSelling", "idAuthor", "authorName", "authorImage"];
            for (let i = 0; i < chosenItems.length ; i++) {
                const item = chosenItems[i]
                item.isMarked = false
                if (user) {
                    if (item.markby.findIndex(ele => ele === user._id) >= 0){
                        item.isMarked = true;
                    }
                }
                const saler = await usersModel.findById({_id : item.idAuthor})
                                                .select("name image");
                if (!saler) res.status(400).send({msg: "Saler not found"});
                item.authorName = saler.name;
                item.authorImage = saler.image;
                const simplifiedItem = {}
                chooseField.forEach(key => {
                    simplifiedItem[key] = item[key];
                })
                result.push(simplifiedItem);
            }
            res.status(200).send({items : result})
        }
    } catch (error) {
        res.status(400).send({err: error})
    }
}

module.exports = getItemList;