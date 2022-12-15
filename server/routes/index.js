const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const usersRoutes = require('./usersRoutes');
const itemsRoutes = require('./itemsRoute');
const itemRoutes = require('./itemRoute')

router.use('/user', userRoutes);
router.use('/users', usersRoutes);
router.use('/items', itemsRoutes);
router.use('/item', itemRoutes)

module.exports = router