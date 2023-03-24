const { expect } = require("chai");
const sinon = require("sinon");

const { salesModel } = require("../../../src/models");
const { salesServices } = require("../../../src/services");
const {
  sales,
  resultGetId,
  bodyNewSales,
  newSales,
} = require("./mocks.services/mocks.sales");


describe("Testes da camada services end point sales", function () {
  afterEach(sinon.restore);

    it("Verifica se a função allSales foi chamada", async function () {
      sinon.stub(salesModel, "allSale").resolves(sales);

      const result = await salesServices.allSales();

      expect(result).to.deep.equal(sales);
    });
  
  // it("Verifica se a função getSalesId foi chamada", async function () {
  //   sinon.stub(salesModel, "allSale").resolves(sales);

  //   const result = await salesServices.salesId(1);

  //   expect(result).to.deep.equal(resultGetId);
  // });

   it("Verifica se a função getSalesId foi chamada com um id errado", async function () {
     sinon.stub(salesModel, "allSale").resolves(sales);

     const result = await salesServices.salesId(123123);
     expect(result).to.deep.equal(null);
   });

});
