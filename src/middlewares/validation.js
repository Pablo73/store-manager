const { productsServices, salesServices } = require('../services');

const validatesProductExists = async (req, res, next) => {
  const product = await productsServices.allProducts();
  const { id } = req.params;
  const thereProduct = product.some((ele) => +ele.id === +id);
  if (!thereProduct) {
   return res.status(404).json({ message: 'Product not found' });
  }
  return next();
};

const validatesSalesExists = async (req, res, next) => {
  const sales = await salesServices.allSales();
  const { id } = req.params;
  const thereSales = sales.some((ele) => +ele.saleId === +id);
  if (!thereSales) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return next();
};

const productIdSales = async (req, res, next) => {
  const { body } = req;
  const productExist = body.map((ele) => Object.keys(ele)[0]);

  const valeuTrue = productExist.every((ele) => ele === 'productId');
  if (!valeuTrue) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  return next();
};

const quantitySales = async (req, res, next) => {
  const { body } = req;
  const qualtityNumber = body.some((ele) => +ele.quantity < 1);
  if (qualtityNumber) {
    return res
      .status(422)
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }
  const qualtityExist = body.map((ele) => Object.keys(ele)[1]);
   const valeuTrue = qualtityExist.every((ele) => ele === 'quantity');
  if (!valeuTrue) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  return next();
};

const updateProducts = async (req, res, next) => {
  const { body } = req;
  const key = body.name;
  if (!key) {
     return res.status(400).json({ message: '"name" is required' });
  }
  if (body.name.length < 5) {
    return res
      .status(422)
      .json({ message: '"name" length must be at least 5 characters long' });
  }
  return next();
};

module.exports = {
  validatesProductExists,
  productIdSales,
  quantitySales,
  updateProducts,
    validatesSalesExists,
 
};
