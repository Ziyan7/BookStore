const express = require("express");
const cors = require("cors");
require('dotenv').config();
const PORT = process.env.PORT ;

// Configuring the database
const connect = require("./config/db.config.js");

// create express app
const app = express();

app.use(
  cors({
    origin:process.env.URL ,
  })
);

app.use(express.json());
const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json");

require("./app/routes/user.routes.js")(app);
require("./app/routes/book.routes.js")(app);
require("./app/routes/cart.routes.js")(app);

// define a simple route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Booke Store application.",
  });
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// listen for requests
app.listen(PORT, () => {
  console.log("Server is listening on port 9000");
  connect();
});
