const express = require('express');
const {
  putSales,
  allSalesControllers,
  allSalesControllersId,
} = require('../sales.controllers');

const {
  quantitySales,
  productIdSales,
} = require('../../middlewares/validation');

const router = express.Router();

router.post('/', productIdSales, quantitySales, putSales);
router.get('/', allSalesControllers);
router.get('/:id', allSalesControllersId);

module.exports = router;