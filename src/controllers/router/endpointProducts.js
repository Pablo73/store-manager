const express = require('express');
const {
  getAllProducts,
  getProductsById,
  insertProducts,
} = require('../products.controllers');

const router = express.Router();

router.get('/', getAllProducts);

router.get('/:id', getProductsById);

router.post('/', insertProducts);

module.exports = router;