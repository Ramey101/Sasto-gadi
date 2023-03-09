const express = require("express");
const app = express();
const cors = require("cors");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Users = require("./models/users");

const checkFieldType = require("./utils/checkFieldType");
const connectDb = require("./db/connectDb");
connectDb();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {
  try {
    //we generate hash(encrpyted password) using bcrypt
    // check https://github.com/kelektiv/node.bcrypt.js#:~:text=(myPlaintextPassword%2C-,saltRounds,-).then
    bcrypt.hash(req.body.password, saltRounds).then(async function (hash) {
      //we set passowrd as new hashed password and save it into db using Save or create
      req.body.password = hash;
      const data = await Users.create(req.body);
      if (data) {
        res.json({
          message: "Registration successful!!",
        });
      } else {
        res.send("Regsitration failed");
      }
    });
  } catch (err) {
    console.log("err" + err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
