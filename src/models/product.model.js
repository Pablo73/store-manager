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

const productInsert = async (value) => {
  const placeholders = Object.keys(value)
  .map((_key) => '?')
  .join(', ');
  
  await connection.execute(
    `INSERT INTO products (name) VALUE (${placeholders})`,
    [...Object.values(value)],
  );
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE name = ?',
    [value.name],
 );
  return result;
};

module.exports = {
  allProduct,
  productById,
  productInsert,
};
