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


const newSales = {
  "id": 4,
  "itemsSold": [
    {
      "productId": 1,
      "quantity": 1
    },
    {
      "productId": 2,
      "quantity": 5
    }
  ]
}

const insertSales = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const updateNewSales = 
  {
    "saleId": 1,
    "itemsUpdated": [
      {
        "productId": 1,
        "quantity": 1
      },
      {
        "productId": 2,
        "quantity": 5
      }
    ]
  };

module.exports = {
  sales,
  newSales,
  insertSales,
  updateNewSales,
};
