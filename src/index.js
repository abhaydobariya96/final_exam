const express = require("express");
const bodyParser = require("body-parser")
const { connectDB } = require("./db/dbconnection");
const routes = require("./routes/v1");
const config = require("./config/config")

const app = express();
connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/v1", routes)
app.use((req, res, next) => {
    next(new error("Route no Found!"))
})

/**create server */
app.listen(config.port, () => {
    console.log(`server listning port number ${config.port}!`);
})