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

module.exports = {
  salesInsert,
};