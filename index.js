const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;
const router = require("./src/router");

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.get("/", function (req, res) {
//   res.send({
//     message: "test",
//   });
// });
app.use("/", router);

const server = http.createServer(app);
server.listen(port);
