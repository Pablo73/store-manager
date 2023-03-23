const { salesServices } = require('../services');

const putSales = async (req, res) => {
  const { body } = req;
  const product = await salesServices.salesInsert(body);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
  return res.status(201).json(product);
};

module.exports = {
  putSales,
};
