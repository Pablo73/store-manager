const connection = require('./connection');

const salesInsert = async (value) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO sales () VALUE ()',
  );

  const insertNewSales = value.map(async (ele) => {
    const query = 'INSERT INTO sales_products (sale_id, product_id, quantity) VALUE (?, ?, ?)';
    await connection.execute(query, [insertId, ele.productId, ele.quantity]);
    return ele;
  });

  return Promise.all(insertNewSales).then((values) => ({
    id: insertId,
    itemsSold: values,
  }));
};

const allSale = async () => {
  const [result] = await connection.execute(
    `SELECT a.sale_id AS saleId, b.date, a.product_id AS productId
    , a.quantity FROM sales_products AS a INNER JOIN sales AS b ON a.sale_id = b.id`,
  );
  return result;
};

const getSalesId = async (id) => {
  const [result] = await connection.execute(
    `SELECT  b.date, a.product_id AS productId, a.quantity FROM sales_products AS a 
    INNER JOIN sales AS b ON a.sale_id = b.id WHERE a.sale_id = ?`, [id],
  );
  return result;
};

module.exports = {
  salesInsert,
  allSale,
  getSalesId,
};