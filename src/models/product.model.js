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

const updateProduct = async (id, value) => {
  await connection.execute(
    'UPDATE products SET name = ? WHERE id = ?', [value.name, id],
  );
  const getIdUpdate = await productById(id);

  return getIdUpdate;
};

const deleteProduct = async (id) => {
 await connection.execute('DELETE FROM products WHERE id = ?', [id]);
};

const getQueryProduct = async (q) => {
  const [query] = await connection.execute(
    'SELECT * FROM products WHERE name LIKE ?',
    [`%${q}%`],
  );
  return query;
};

module.exports = {
  allProduct,
  productById,
  productInsert,
  updateProduct,
  deleteProduct,
  getQueryProduct,
};
