const connection = require('./connection');

const allProduct = async () => {
  try {
    const [result] = await connection.execute(
      'SELECT * FROM products',
    );
    return result;
  } catch (error) {
    console.error(`Problem making request to database ${error}`);
  }
};

const productById = async (id) => {
  try {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [id],
  );
  return result;
   } catch (error) {
    console.error(`Problem making request to database ${error}`);
  }
};

const productInsert = async (value) => {
  try {
  const placeholders = Object.keys(value)
    .map((_key) => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO products (name) VALUE (${placeholders})`,
    [...Object.values(value)],
  );
  const newInsert = { id: insertId, name: value.name };
    return newInsert;
   } catch (error) {
    console.error(`Problem making request to database ${error}`);
  }
};

const updateProduct = async (id, value) => {
  try {
  await connection.execute(
    'UPDATE products SET name = ? WHERE id = ?', [value.name, id],
  );
  const getIdUpdate = await productById(id);

  return getIdUpdate;
   } catch (error) {
    console.error(`Problem making request to database ${error}`);
  }
};

const deleteProduct = async (id) => {
  try {
  await connection.execute('DELETE FROM products WHERE id = ?', [id]);
   } catch (error) {
    console.error(`Problem making request to database ${error}`);
  }
};

const getQueryProduct = async (q) => {
  try {
  const [query] = await connection.execute(
    'SELECT * FROM products WHERE name LIKE ?',
    [`%${q}%`],
  );
  return query;
   } catch (error) {
    console.error(`Problem making request to database ${error}`);
  }
};

module.exports = {
  allProduct,
  productById,
  productInsert,
  updateProduct,
  deleteProduct,
  getQueryProduct,
};
