const connection = require('./connection');

const salesInsert = async (value) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO sales () VALUE ()',
  );

  const map = value.map(async (ele) => {
    const query = 'INSERT INTO sales_products (sale_id, product_id, quantity) VALUE (?, ?, ?)';
    await connection.execute(query, [insertId, ele.productId, ele.quantity]);
    return ele;
  });

  return Promise.all(map).then((values) => ({ id: insertId, itemsSold: values }));
};

module.exports = {
  salesInsert,
};