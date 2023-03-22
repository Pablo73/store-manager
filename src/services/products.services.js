const productModel = require('../models/product.model');

const allProducts = async () => {
  const all = await productModel.allProduct();
  return all;
};

const productsId = async (id) => {
  const product = await productModel.productById(id);
  return product;
};

const productInsert = async (value) => {
  const product = await productModel.productInsert(value);
  return product;
};

module.exports = {
  allProducts,
  productsId,
  productInsert,
};