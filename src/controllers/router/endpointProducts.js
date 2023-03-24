const express = require('express');
const {
  getAllProducts,
  getProductsById,
  insertProducts,
  putProductsById,
} = require('../products.controllers');

const {
  validatesProductExists,
  updateProducts,
} = require('../../middlewares/validation');

const router = express.Router();

router.get('/', getAllProducts);

router.get('/:id', validatesProductExists, getProductsById);

router.post('/', insertProducts);

router.put('/:id', validatesProductExists, updateProducts, putProductsById);

module.exports = router;