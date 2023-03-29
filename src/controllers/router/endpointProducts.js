const express = require('express');
const {
  getAllProducts,
  getProductsById,
  insertProducts,
  putProductsById,
  deleteProduct,
  queryProduct,
} = require('../products.controllers');

const {
  validatesProductExists,
  updateProducts,
} = require('../../middlewares/validation');

const router = express.Router();

router.get('/search', queryProduct);

router.get('/', getAllProducts);

router.get('/:id', validatesProductExists, getProductsById);

router.post('/', insertProducts);

router.put('/:id', validatesProductExists, updateProducts, putProductsById);

router.delete('/:id', validatesProductExists, deleteProduct);

module.exports = router;