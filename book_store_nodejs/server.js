const express = require("express");
const cors = require("cors");

// Configuring the database
const connect = require("./config/db.config.js");

// create express app
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000"
  })
)

app.use(express.json());

require("./app/routes/user.routes.js")(app);
require("./app/routes/book.routes.js")(app);
require("./app/routes/cart.routes.js")(app);

// define a simple route
app.get("/", (req, res) => {
    res.json({
      message:
        "Welcome to Booke Store application.",
    });
  });

// listen for requests
app.listen(9000, () => {
    console.log("Server is listening on port 9000");
    connect();
  });
  
