const sales = [
  {
    saleId: 1,
    date: "2023-03-24T15:00:49.000Z",
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: "2023-03-24T15:00:49.000Z",
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: "2023-03-24T15:00:49.000Z",
    productId: 3,
    quantity: 15,
  },
];

const bodyNewSales = [
  {
    productId: 3,
    quantity: 8,
  },
  {
    productId: 4,
    quantity: 8,
  },
];

const newSales = {
  "id": 4,
  "itemsSold": [
    {
      "productId": 3,
      "quantity": 2
    },
    {
      "productId": 3,
      "quantity": 1
    }
  ]
}

module.exports = {
  sales,
  newSales,
  bodyNewSales,
};
