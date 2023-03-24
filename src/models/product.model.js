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

  const [{ insertId }] = await connection.execute(
    `INSERT INTO products (name) VALUE (${placeholders})`,
    [...Object.values(value)],
  );

  const newInsert = { id: insertId, name: value.name };
  return newInsert;
};

module.exports = {
  allProduct,
  productById,
  productInsert,
};
