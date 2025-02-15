const express = require('express')


function customerServer() {
    const app = express();

    app.use( '/', (req, res, next) => {
        return res.status(200).json({"msg": "Customer Service"})
    })

    app.listen(8001, () => {
        console.log("Customer server is running");
    })

}

customerServer();