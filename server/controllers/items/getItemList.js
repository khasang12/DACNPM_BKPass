const itemsModel = require("../../models/items");
const usersModel = require("../../models/users");

const getItemList = async (req, res) => {
  try {
    const user = req.body.author;
    const searchPattern = { isSelling: true };
    if (req.query.selling && req.query.selling === "false") {
      searchPattern.isSelling = false;
    }
    const pageNum = parseInt(req.query.page ? req.query.page : 1);
    const limit = parseInt(req.query.limit ? req.query.limit : 10);
    const filter = {
      author: "idAuthor",
      category: "category",
      name: "title",
      status: "status",
      markby: "markBy",
    };
    for (const key in filter) {
      if (req.query[key]) {
        // if (key === "markby") {
        //     delete searchPattern.isSelling;
        // }
        if (key === "name")
          searchPattern.title = { $regex: req.query.name, $options: "i" };
        else searchPattern[filter[key]] = req.query[key];
      }
    }
    const sortType = {
      time: {
        date: -1,
      },
      priceDown: {
        price: -1,
      },
      priceUp: {
        price: 1,
      },
      numConcern: {
        numConcerner: -1,
      },
    };
    const start = limit * (pageNum - 1);
    const end = limit * pageNum;
    const itemsList = await itemsModel
      .find(searchPattern)
      .limit(end)
      .sort(sortType[req.query.sortby ? req.query.sortby : "time"]);
    if (end <= 0 || start >= itemsList.length) {
      res.status(200).send({ items: [] });
    } else {
      const chosenItems = itemsList.slice(start, end);
      const result = [];
      const chooseField = [
        "_id",
        "category",
        "status",
        "price",
        "title",
        "image",
        "date",
        "isMarked",
        "isSelling",
        "idAuthor",
        "authorName",
        "authorImage",
      ];
      const success = true;
      for (let i = 0; i < chosenItems.length; i++) {
        const item = chosenItems[i];
        item.isMarked = false;
        if (user) {
          if (item.markby.findIndex((ele) => ele === user._id) >= 0) {
            item.isMarked = true;
          }
        }
        const saler = await usersModel
          .findById({ _id: item.idAuthor })
          .select("name image");
        if (!saler) success = false;
        item.authorName = saler.name;
        item.authorImage = saler.image;
        const simplifiedItem = {};
        chooseField.forEach((key) => {
          simplifiedItem[key] = item[key];
        });
        result.push(simplifiedItem);
      }
      if (success) res.status(200).send({ items: result });
      else res.status(404).send({ msg: "saler not found" });
    }
  } catch (error) {
    res.status(400).send({ err: error });
  }
};

module.exports = getItemList;
