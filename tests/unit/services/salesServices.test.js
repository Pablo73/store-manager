const { expect } = require("chai");
const sinon = require("sinon");

const { salesModel, productModel } = require("../../../src/models");
const { salesServices } = require("../../../src/services");
const {
  sales,
  resultGetId,
  bodyNewSales,
  newSales,
  updateSales,
  products,
} = require("./mocks.services/mocks.sales");


describe("Testes da camada services end point sales", function () {
  afterEach(sinon.restore);

  it("Verifica se a função allSales foi chamada", async function () {
    sinon.stub(salesModel, "allSale").resolves(sales);

    const result = await salesServices.allSales();

    expect(result).to.deep.equal(sales);
  });

  it("Verifica se a função getSalesId foi chamada", async function () {
    sinon.stub(salesModel, "allSale").resolves(sales);
    sinon.stub(salesModel, "getSalesId").resolves(sales[0]);

    const result = await salesServices.salesId(1);

    expect(result).to.deep.equal(sales[0]);
  });
  

  it("Verifica se a função getSalesId foi chamada com um id errado", async function () {
    sinon.stub(salesModel, "allSale").resolves(sales);

    const result = await salesServices.salesId(123123);
    expect(result).to.deep.equal(null);
  });

  it("Verifica a função deleteSalesId", async function () {
    sinon.stub(salesModel, "deleteSales").resolves(undefined);

    const result = await salesServices.deleteSalesId(1);

    expect(result).to.deep.equal(undefined);
  });

  it("Verifica a função updateSalesId", async function () {
    sinon.stub(productModel, "allProduct").resolves(products);
    sinon.stub(salesModel, "updateSalesById").resolves(newSales);

    const result = await salesServices.updateSalesId(4, updateSales);

    expect(result).to.deep.equal(newSales);
  });

  it("Verifica a função updateSalesId retorna erro", async function () {
    sinon.stub(productModel, "allProduct").resolves(products);
    sinon.stub(salesModel, "updateSalesById").resolves(newSales);

    const result = await salesServices.updateSalesId(4, bodyNewSales);

    expect(result).to.deep.equal(null);
  });

  

    it("Verifica a função salesInsert", async function () {
      sinon.stub(productModel, "allProduct").resolves(products);
      sinon.stub(salesModel, "salesInsert").resolves(newSales);

      const result = await salesServices.salesInsert(updateSales);

      expect(result).to.deep.equal(newSales);
    });
  
  
    it("Verifica a função salesInsert retorm erro", async function () {
      sinon.stub(productModel, "allProduct").resolves(products);
      sinon.stub(salesModel, "salesInsert").resolves(newSales);

      const result = await salesServices.salesInsert(bodyNewSales);

      expect(result).to.deep.equal(null);
    });
});
