const connection = require('./connection');

const allProduct = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products',
  );
  return result;
};

const productById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [id],
  );
  return result;
};

module.exports = {
  allProduct,
  productById,
};
