const express = require("express");
const app = express();
var jwt = require("jsonwebtoken");
const mysql = require("mysql");
var cors = require("cors");
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "login_users",
});

app.use("/Signup", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  if (email === "" || password === "" || firstName === "" || lastName === "") {
    res.send({
      message: "Empty or Incomplete Details!",
    });
  } else {
    db.query(
      " INSERT INTO users ( email, password, firstName, lastName) VALUES (?, ?, ?, ? ) ", //SQL Query
      [email, password, firstName, lastName],
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }
        if (result) {
          res.send({
            message: "Signup Successful!",
          });
        }
      }
    );
  }
});

app.use("/Login", (req, res) => {
  const emailLogin = req.body.email;
  const passwordLogin = req.body.password;

  if (emailLogin === "" || passwordLogin === "") {
    res.send({
      message: "Invalid Input :(",
    });
  }

  if (emailLogin.includes(".com")) {
    db.query(
      " SELECT * FROM users WHERE email = ? AND password = ? ", //SQL query
      [emailLogin, passwordLogin],
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }

        if (result.length > 0) {
          jwt.sign(
            { passwordLogin },
            "secretkey",
            { expiresIn: "4h" },
            (err, token) => {
              res.send({
                email: emailLogin,
                password: token,
              });
            }
          );
        } else {
          res.send({
            message: "Invalid Password",
          });
        }
      }
    );
  } else {
    res.send({
      message: "Invalid Email",
    });
  }
});

app.use("/Dashboard", (req, res) => {
  const email = req.body.email;

  db.query(
    "SELECT firstName, lastName FROM users WHERE email = ? ",
    [email],

    (err, result) => {
      if (err) {
        res.send({
          message: "Name not found :(",
        });
      } else {
        res.send(result);
      }
    }
  );
});

app.use("/EditPage", (req, res) => {
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  db.query(
    "UPDATE users SET firstName=?, lastNAME=? WHERE email = ? ",
    [firstName, lastName, email],
    (err, result) => {
      if (err) {
        res.send({
          message: "Error",
        });
      } else {
        res.send({
          message: "Name change successful!",
        });
      }
    }
  );
});

app.listen(3001);
