const router = require("express").Router();

const searchSaler = require('../controllers/users/searchSaler');

router.get('/', searchSaler);

module.exports = router