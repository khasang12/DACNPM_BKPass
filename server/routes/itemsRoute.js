const express = require('express');
const router = express.Router();

const getItemList = require('../controllers/items/getItemList');
const optionalAuth = require('../middlewares/optionalAuth');

router.get('/', optionalAuth, getItemList);

module.exports = router;