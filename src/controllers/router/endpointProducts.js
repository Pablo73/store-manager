const express = require('express');
const {
  getAllProducts,
  getProductsById,
  insertProducts,
} = require('../products.controllers');

const { validatesProductExists } = require('../../middlewares/validation');

const router = express.Router();

router.get('/', getAllProducts);

router.get('/:id', validatesProductExists, getProductsById);

router.post('/', insertProducts);

module.exports = router;