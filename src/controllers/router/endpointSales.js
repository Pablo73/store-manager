const express = require('express');
const {
  putSales,
  allSalesControllers,
  allSalesControllersId,
  deleteSales,
} = require('../sales.controllers');

const {
  quantitySales,
  productIdSales,
  validatesSalesExists,
} = require('../../middlewares/validation');

const router = express.Router();

router.post('/', productIdSales, quantitySales, putSales);

router.get('/', allSalesControllers);

router.get('/:id', allSalesControllersId);

router.delete('/:id', validatesSalesExists, deleteSales);

module.exports = router;