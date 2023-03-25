const { productModel } = require('../models');
const { nameSchema } = require('./validations/schemas');

const allProducts = async () => {
  const all = await productModel.allProduct();
  return all;
};

const productsId = async (id) => {
  const product = await productModel.productById(id);
  return product;
};

const productInsert = async (value) => {
  const { error } = nameSchema.validate(value.name);
  if (error) {
    return { message: error.message };
  }
  const product = await productModel.productInsert(value);
  return product;
};

const updateProductsId = async (id, value) => {
  const updateId = await productModel.updateProduct(id, value);
 return updateId;
};

const deleteProductId = async (id) => {
  const productId = await productModel.deleteProduct(id);
  return productId;
};

module.exports = {
  allProducts,
  productsId,
  productInsert,
  updateProductsId,
  deleteProductId,
};