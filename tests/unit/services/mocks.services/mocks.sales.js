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

const resultGetId = [
  {
    "date": "2023-03-24T15:00:49.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "date": "2023-03-24T15:00:49.000Z",
    "productId": 2,
    "quantity": 10
  }
]

const bodyNewSales = [
  {
    productId: 45454545,
    quantity: 2,
  },
  {
    productId: 35454545454,
    quantity: 1,
  },
];

const newSales = {
  id: 4,
  itemsSold: [
    {
      productId: 3,
      quantity: 2,
    },
    {
      productId: 3,
      quantity: 1,
    },
  ],
};

const updateSales = [
  {
    productId: 1,
    quantity: 10,
  },
  {
    productId: 2,
    quantity: 50,
  },
];


const products = [
  {
    id: 1,
    name: "Martelo de Thor",
  },
  {
    id: 2,
    name: "Traje de encolhimento",
  },
  {
    id: 3,
    name: "Escudo do Capitão América",
  },
];

module.exports = {
  sales,
  resultGetId,
  bodyNewSales,
  newSales,
  updateSales,
  products,
};
