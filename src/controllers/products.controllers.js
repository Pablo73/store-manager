const { productsServices } = require('../services');

const getAllProducts = async (_req, res) => {
  const product = await productsServices.allProducts();
  return res.status(200).json(product);
};

const getProductsById = async (req, res) => {
  const product = await productsServices.allProducts();
  const { id } = req.params;
  const thereProduct = product.some((ele) => +ele.id === +id);
  
  if (thereProduct) {
    const productId = await productsServices.productsId(id);
  
    return res.status(200).json(productId);
  }
  return res.status(404).json({ message: 'Product not found' });
};

module.exports = {
  getAllProducts,
  getProductsById,
};
