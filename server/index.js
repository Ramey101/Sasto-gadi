const express = require("express");
const app = express();
const cors = require("cors");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Users = require("./models/users");

const checkFieldType = require("./utils/checkFieldType");
const connectDb = require("./db/connectDb");
connectDb();
require("dotenv").config();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {
  console.log(req.body);
  const data = await Users.create(req.body);
  // try {
  //   //we generate hash(encrpyted password) using bcrypt
  //   // check https://github.com/kelektiv/node.bcrypt.js#:~:text=(myPlaintextPassword%2C-,saltRounds,-).then
  //   bcrypt.hash(req.body.password, saltRounds).then(async function (hash) {
  //     //we set passowrd as new hashed password and save it into db using Save or create
  //     req.body.password = hash;
  //     const data = await Users.create(req.body);
  //     if (data) {
  //       res.json({
  //         message: "Registration successful!!",
  //       });
  //     } else {
  //       res.send("Regsitration failed");
  //     }
  //   });
  // } catch (err) {
  //   console.log("err" + err);
  // }
});

app.post("/login", async (req, res) => {
  try {
    const fieldKey = checkFieldType(req.body.loginKey);
    const token = GenerateJwt(fieldKey, req.body.loginKey);
    //first we need check if the req.body.loginKey's value exist in the db
    const data = await Users.findOne({
      [fieldKey]: req.body.loginKey,
      userRole: req.body.userRole,
    });
    //if data is there, it means we found a document in db with that particular phoneNumber
    if (data) {
      //we now compare the password(bcrypt lib decypts and compares itself) in db with the one we typed in UI
      bcrypt.compare(req.body.password, data.password, function (err, result) {
        if (result) {
          res.json({
            message: "Login Success!!",
            token,
            id: data._id,
          });
        } else {
          res.status(401).json({
            message: "Wrong Password",
          });
        }
      });
    } else {
      res.status(403).json({
        message: "Invalid credentials",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
