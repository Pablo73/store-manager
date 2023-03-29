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

const message = { message: "Product not found" };

const updateNewSales = {
  saleId: 1,
  itemsUpdated: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ],
};

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

const allSales = [
  {
    saleId: 1,
    date: "2021-09-09T04:54:29.000Z",
    productId: 1,
    quantity: 2,
  },
  {
    saleId: 1,
    date: "2021-09-09T04:54:54.000Z",
    productId: 2,
    quantity: 2,
  },
];

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

const searchProduct =
  [
    {
      id: 1,
      name: "Martelo de Thor",
    },
  ];

module.exports = {
  products,
  message,
  updateNewSales,
  bodyNewSales,
  allSales,
  updateSales,
  searchProduct,
};
