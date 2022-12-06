const { insertItem, getItem } = require("../controllers/itemController");

const router = require("express").Router();
router.post("/add-item",insertItem)
router.get("/get-item",getItem)

module.exports = router