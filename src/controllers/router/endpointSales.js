const express = require('express');
const { putSales } = require('../sales.controllers');

const {
  quantitySales,
  productIdSales,
} = require('../../middlewares/validation');

const router = express.Router();

router.post('/',
  productIdSales,
  quantitySales,
  putSales);

module.exports = router;