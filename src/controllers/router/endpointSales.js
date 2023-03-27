const express = require('express');
const {
  putSales,
  allSalesControllers,
  allSalesControllersId,
  deleteSales,
  updateSalesById,
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

router.put('/:id', validatesSalesExists, productIdSales, quantitySales, updateSalesById);

module.exports = router;