const { productModel } = require('../models');
const { salesModel } = require('../models');

const salesInsert = async (value) => {
    const product = await productModel.allProduct();
 
    const productExist = value.map((ele) => ele.productId);

    const thereProduct = productExist.map((ele) =>
      product.some((sales) => +ele === +sales.id));
    const valeuTrue = thereProduct.every((ele) => ele);

    if (!valeuTrue) {
      return null;
    }
  const sales = await salesModel.salesInsert(value);
  return sales;
};

const allSales = async () => {
  const sales = await salesModel.allSale();
  return sales;
};

const salesId = async (id) => {
  const sales = await salesModel.allSale();
  const validIdSales = sales.some((ele) => ele.saleId === +id);

  if (validIdSales) {
    const salesIds = await salesModel.getSalesId(id);
    return salesIds;
  } 
    return null;
};

const deleteSalesId = async (id) => {
  const productId = await salesModel.deleteSales(id);
  return productId;
};

module.exports = {
  salesInsert,
  allSales,
  salesId,
  deleteSalesId,
};