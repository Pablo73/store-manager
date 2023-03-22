const sinon = require("sinon");
const chai = require('chai');

const sinonChai = require('sinon-chai');
const chaiHttp = require("chai-http");

chai.use(sinonChai);

const { expect } = chai;

chai.use(chaiHttp);

const { productsServices } = require("../../../src/services");
const { productControllers } = require("../../../src/controllers");
const { products, message } = require("./mocks.controllers/mocks.controllers");
const app = require('../../../src/app');

describe("Testa da camada controllers store", function () {

  afterEach(sinon.restore);

  it("getAll retorna status 200 e objeto com resultado", async function () {
    sinon.stub(productsServices, "allProducts").resolves(products);

    const res = {};
    const req = {
      params: {},
      body: {},
      query: {},
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();


    await productControllers.getAllProducts(req, res);
    
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products);
  });

  it("getById retorna status 200 e objeto com resultado", async function () {
    sinon.stub(productsServices, "productsId").resolves([products[0]]);

    const res = {};
    const req = {
      params: { id: 1},
      body: {},
      query: {},
    };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();


    await productControllers.getProductsById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith([
      {
        id: 1,
        name: "Martelo de Thor",
      }
    ]);
  });


  it("getById retorna status 404", async function () {
    const res = {};
    const req = {
      params: { id: 456 },
      body: {},
      query: {},
    };

     res.status = sinon.stub().returns(res);
     res.json = sinon.stub().returns();

    await productControllers.getProductsById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: "Product not found" });
  });
});

describe("Testa as rotas controllers store", function () { 
  it("router /products allProducts", async function () {

    const response = await chai.request(app).get("/products");
    
    expect(response.status).to.be.equal(200);

  });
});
