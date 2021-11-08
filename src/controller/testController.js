
module.exports = class TestController {

    constructor() {
    }

    testFunc = async (req, res) => {
        return res.json({
            status: "OK",
        })
    }

}