const { expect } = require("chai");
const sinon = require("sinon");


const { salesModel } = require("../../../src/models");
const {
  sales,
  insertSales,
  newSales,
  updateNewSales,
} = require("./mocks.models/sales.model");
const connection = require("../../../src/models/connection");

describe("Testes da camada model end point sales", function () {
  afterEach(sinon.restore);

    it("Listar todas as sales", async function () {
      sinon.stub(connection, "execute").resolves([sales]);

      const result = await salesModel.allSale();

      expect(result).to.be.deep.equal(sales);
    });
  
    it("Listar todas as sales por id", async function () {
      sinon.stub(connection, "execute").resolves([sales[0]]);

      const result = await salesModel.getSalesId(1);

      expect(result).to.be.deep.equal(sales[0]);
    });
  
    it("Insert new sales", async function () {
      sinon.stub(connection, "execute").resolves([{ insertId: 4 }]);

      const result = await salesModel.salesInsert(insertSales);

      expect(result).to.be.deep.equal(newSales);
    });
  
    it("Delete new sales", async function () {
      sinon.stub(connection, "execute").resolves([sales]);

      const result = await salesModel.deleteSales(4);

      expect(result).to.be.deep.equal(undefined);
    });
  
    it("Update new sales", async function () {
      sinon.stub(connection, "execute").resolves(updateNewSales);

      const result = await salesModel.updateSalesById(1, insertSales);

      expect(result).to.be.deep.equal(updateNewSales);
    });

});