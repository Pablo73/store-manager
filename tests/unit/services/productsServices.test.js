const { expect } = require("chai");
const sinon = require("sinon");

const { productModel } = require('../../../src/models');
const { productsServices } = require('../../../src/services');
const { products } = require('./mocks.services/mocks.products.mocks');


describe("Testes da camada services end point products", function () {
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

  it("retorna um erro ao passar um key invalida", async function () {
    const result = await productsServices.productInsert({ invalidKey: "Produto9" });

    expect(result.message).to.equal('"name" is required' );
  });

   it("retorna um erro ao passar um nome com menos de 5 caracteres", async function () {
     const result = await productsServices.productInsert({
       name: "Pr",
     });

     expect(result.message).to.equal('"name" length must be at least 5 characters long');
   });
  
  it("Verifica se a função productInsert foi chamada", async function () {
    sinon.stub(productModel, "productInsert").resolves({
      id: 4,
      name: "ProdutoX",
    });

    const result = await productsServices.productInsert({ name: "ProdutoX" });

    expect(result).to.deep.equal({
      id: 4,
      name: "ProdutoX",
    });
  });
});