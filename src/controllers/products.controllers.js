const { productsServices } = require('../services');

const getAllProducts = async (_req, res) => {
  const product = await productsServices.allProducts();
  return res.status(200).json(product);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const productId = await productsServices.productsId(id);
  return res.status(200).json(productId);
};

const insertProducts = async (req, res) => {
  const { body } = req;
  const product = await productsServices.productInsert(body);

  if (product.message && product.message.includes('required')) {
    return res.status(400).json(product);
  }
  if (product.message && product.message.includes('length')) {
    return res.status(422).json(product);
  }

  return res.status(201).json(product);
};

const putProductsById = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const productId = await productsServices.updateProductsId(id, body);
  return res.status(200).json(productId);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await productsServices.deleteProductId(id);
  return res.status(204).json();
};

const queryProduct = async (req, res) => {
  const { q } = req.query;
  const getQuery = await productsServices.searchProduct(q);
  return res.status(200).json(getQuery);
};

module.exports = {
  getAllProducts,
  getProductsById,
  insertProducts,
  putProductsById,
  deleteProduct,
  queryProduct,
};
