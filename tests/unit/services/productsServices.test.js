const { expect } = require("chai");
const sinon = require("sinon");

const { productModel } = require('../../../src/models');
const { productsServices } = require('../../../src/services');
const { products } = require('./mocks.services/mocks.products.mocks');


describe("Testes da camada services store manager", function () {
  afterEach(sinon.restore);

  it("Verifica se a função allProduct foi chamada", async function () {
    sinon.stub(productModel, "allProduct").resolves(products);

    const result = await productsServices.allProducts();

    expect(result).to.deep.equal(products);
  });

  it("Verifica se a função productById foi chamada", async function () {
    sinon.stub(productModel, "productById").resolves(products);

    const result = await productsServices.productsId(1);

    expect(result).to.deep.equal(products);
  });
});