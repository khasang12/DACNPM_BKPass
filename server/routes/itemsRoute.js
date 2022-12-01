const express = require('express');
const router = express.Router();

const getItemList = require('../controllers/items/getItemList');

router.get('/',  getItemList);

module.exports = router;