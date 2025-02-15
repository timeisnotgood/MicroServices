const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');


function gateWay() {

    const app = express();
    app.use(cors());
    app.use(express.json());


    app.use('/Customer', proxy('http://localhost:8001/'))
    app.use('/Product', proxy('http://localhost:8002/'))
    app.use('/', proxy('http://localhost:8002/'))

    app.listen(8000, () => {
        console.log("GateWay is Up and running !!!");
    })

}

gateWay();