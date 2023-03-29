const sinon = require("sinon");
const chai = require("chai");

const sinonChai = require("sinon-chai");
const chaiHttp = require("chai-http");

chai.use(sinonChai);

const { expect } = chai;

chai.use(chaiHttp);

const { salesServices } = require("../../../src/services");
const { salesControllers } = require("../../../src/controllers");
const {
  updateNewSales,
  bodyNewSales,
  allSales,
  updateSales,
} = require("./mocks.controllers/mocks.controllers");

const {
  validatesProductExists,
  productIdSales,
  quantitySales,
} = require("../../../src/middlewares/validation");


describe("Testa da camada controllers Sales", function () {

  afterEach(sinon.restore);

  it("test função putSales", async function () {
    sinon.stub(salesServices, "salesInsert").resolves(updateNewSales);
    
    const res = {};
    const req = {
      params: {},
      body: updateNewSales,
      query: {},
    };
    
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await salesControllers.putSales(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(updateNewSales);
  });
  
    it("test validação productIdSales função putSales", async function () {
      sinon.stub(salesServices, "salesInsert").resolves(null);

      const res = {};
      const req = {
        params: {},
        body: bodyNewSales,
        query: {},
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await salesControllers.putSales(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({
        message: "Product not found",
      });
    });
  
  it("test função allSalesControllers", async function () {
    sinon.stub(salesServices, "allSales").resolves(allSales);

    const res = {};
    const req = {
      params: {},
      body: {},
      query: {},
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await salesControllers.allSalesControllers(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allSales);
  });

  it("test função allSalesControllersId", async function () {
    sinon.stub(salesServices, "salesId").resolves(allSales);

    const res = {};
    const req = {
      params: { id: 1 },
      body: {},
      query: {},
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await salesControllers.allSalesControllersId(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allSales);
  });

it("test função allSalesControllersId com validação", async function () {
  sinon.stub(salesServices, "salesId").resolves(null);

  const res = {};
  const req = {
    params: { id: 5656 },
    body: {},
    query: {},
  };

  res.status = sinon.stub().returns(res);
  res.json = sinon.stub().returns();

  await salesControllers.allSalesControllersId(req, res);

  expect(res.status).to.have.been.calledWith(404);
  expect(res.json).to.have.been.calledWith({ message: "Sale not found" });
});

  
it("test função deleteSales", async function () {
  sinon.stub(salesServices, "deleteSalesId").resolves(undefined);

  const res = {};
  const req = {
    params: { id: 1 },
    body: {},
    query: {},
  };

  res.status = sinon.stub().returns(res);
  res.json = sinon.stub().returns();

  await salesControllers.deleteSales(req, res);

  expect(res.status).to.have.been.calledWith(204);
});
  
  it("test função updateSalesById", async function () {
    sinon.stub(salesServices, "updateSalesId").resolves(updateNewSales);

    const res = {};
    const req = {
      params: {},
      body: updateSales,
      query: {},
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await salesControllers.updateSalesById(req, res);

    expect(res.status).to.have.been.calledWith(200);
     expect(res.json).to.have.been.calledWith(updateNewSales);
  });

it("test função updateSalesById error", async function () {
  sinon.stub(salesServices, "updateSalesId").resolves(null);

  const res = {};
  const req = {
    params: {},
    body: bodyNewSales,
    query: {},
  };

  res.status = sinon.stub().returns(res);
  res.json = sinon.stub().returns();

  await salesControllers.updateSalesById(req, res);

  expect(res.status).to.have.been.calledWith(404);
  expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
});
});