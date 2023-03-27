const { salesServices } = require('../services');

const putSales = async (req, res) => {
  const { body } = req;
  const product = await salesServices.salesInsert(body);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
  return res.status(201).json(product);
};

const allSalesControllers = async (req, res) => {
  const sales = await salesServices.allSales();

  return res.status(200).json(sales);
};

const allSalesControllersId = async (req, res) => {
  const { id } = req.params;
  const salesId = await salesServices.salesId(id);

  if (salesId) {
    return res.status(200).json(salesId);
  }
  return res.status(404).json({ message: 'Sale not found' });
};

const deleteSales = async (req, res) => {
  const { id } = req.params;
  await salesServices.deleteSalesId(id);
  return res.status(204).json();
};

const updateSalesById = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const SalesId = await salesServices.updateSalesId(id, body);
      if (!SalesId) {
        return res.status(404).json({ message: 'Product not found' });
      }
      return res.status(200).json(SalesId);
};

module.exports = {
  putSales,
  allSalesControllers,
  allSalesControllersId,
  deleteSales,
  updateSalesById,
};
