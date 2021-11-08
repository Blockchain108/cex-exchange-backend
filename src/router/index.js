const routerx = require("express-promise-router")
const testRouter = require("./testRouter")

const Router = routerx();

Router.use("/softgam", testRouter);

module.exports = Router;