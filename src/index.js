const express = require("express");
const bodyParser = require("body-parser");
const {PORT} = require('./config/serverConfig');



const setupAndStartServer = async()=>{
    // creating the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT,()=>{
        console.log(`server started at port ${PORT}`);
    })
}


setupAndStartServer();
