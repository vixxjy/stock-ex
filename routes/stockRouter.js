const express = require('express');
const stockRouter = express.Router();
const stockController = require('../controllers/stockController');

stockRouter.route('/stocks').get(stockController);

module.exports = stockRouter;