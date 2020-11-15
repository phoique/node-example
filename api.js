const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerDoc = require("./swagger.json");
const app = express();

// Express body parser.
app.use(
  express.json(),
  express.urlencoded({ extended: false }),
);

app.use("/doc", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    desc: "Node.js Web Service"
  });
});

// Message add endpoint
app.post("/", (req, res) => {

  if(req.body.message) {

    return res.status(200).json({
      status: true,
      desc: "Message",
      result: req.body.message
    });

  }
  else {
    return res.status(404).json({
      status: true,
      desc: "Message",
      result: undefined
    });
  }
  
});

function auth(req, res, next) {
  if(req.headers.authorization && req.headers.authorization === "tokenxxxxxx") {
    next();
  }
  else {
    res.status(401).json({status: false, desc: "Erişim engellendi!"});
  }
}

app.post("/private", auth, (req, res) => {
  res.status(200).json({
    status: true,
    desc: "Private post route"
  });
});

app.post("/token", (req, res) => {
  res.status(200).json({
    status: true,
    desc: "token",
    result: "tokenxxxxxx"
  });
});

app.listen(3000, () => console.log("Node.js Web Service - 3000"));

module.exports = app;