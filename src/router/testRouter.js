const routerx = require("express-promise-router")
const TestController = require("../controller/testController")

const Router = routerx();

Router.post("*", TestController.testFunc)

module.exports = Router;