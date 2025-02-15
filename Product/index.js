const express = require('express')


function productServer() {
    const app = express();

    app.use( '/', (req, res, next) => {
        return res.status(200).json({"msg": "Product Service"})
    })

    app.listen(8002, () => {
        console.log("Product server is running");
    })

}

productServer();