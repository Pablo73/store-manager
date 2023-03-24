const { expect } = require("chai");
const sinon = require("sinon");

const { productModel } = require('../../../src/models');
const { products } = require("./mocks.models/products.model");
const connection = require('../../../src/models/connection');

describe("Testes da camada model store manager", function () {
  afterEach(sinon.restore);

  it("Listar todos os produtos", async function () {
    sinon.stub(connection, "execute").resolves([products]);

    const result = await productModel.allProduct();

    expect(result).to.be.deep.equal(products);
  });
  
  it("Listar todos os produtos por id", async function () {
    sinon.stub(connection, "execute").resolves([[products[0]]]);

    const result = await productModel.productById(1);

    expect(result).to.be.deep.equal(products[0]);
  });

  it("Insert new product", async function () {
    sinon.stub(connection, "execute").resolves([{ insertId: 4 }]);

    const result = await productModel.productInsert({ name: "ProdutoX" });

    expect(result).to.be.deep.equal(
    {
      id: 4,
      name: "ProdutoX",
    });
  });
});