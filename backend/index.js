const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const sendToken = require("./utils/jwtToken");

const app = express();

app.use(express.json());
app.use(cors());

const port = 4000;

const con = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "accoutsection",
});

app.post("/register", (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  con.query(
    `INSERT INTO user (email, password) VALUES (?, ?)`,
    [user.email, user.password],
    (err, result) => {
      if (err) {
        console.error("An error occurred:", err);
        res.status(500).json({ message: "Internal Server Error" });
      } else {
        console.log("Registration successful!");
        user.id = result.insertId;
        sendToken(user, 201, res);
        // res.status(200).json(result); // Set the response code to 200 (OK)
      }
      res.end(); // Close the connection
    }
  );
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  con.query(
    "SELECT * FROM user WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        req.setEncoding({ err: err });
      } else {
        if (result.length > 0) {
          sendToken(result[0], 201, res);
          // res.status(200).json({
          //   success: true,
          //   result: result
          // }); // Set the response code to 200 (OK)
        } else {
          res.json({ success: false, message: "WRONG USERNAME OR PASSWORD" });
        }
      }
      res.end(); // Close the connection
    }
  );
});

app.post("/addstudent", (req, res) => {
  const {
    title,
    name,
    telephone,
    email,
    dob,
    pin,
    addr1,
    addr2,
    previous_institute,
    previous_education,
    gradeofmarks,
    yearofadmission,
    yearofpassing,
    current_status,
    category,
    seatType,
    branch,
    admittedtoacademicyear,
  } = req.body;

  con.query(
    `INSERT INTO student (title, name, telephone, email, dob, pin, addr1, addr2, previous_institute, previous_education, gradeofmarks, yearofadmission, yearofpassing, current_status, category, seatType, branch, admittedtoacademicyear) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      title,
      name,
      telephone,
      email,
      dob,
      pin,
      addr1,
      addr2,
      previous_institute,
      previous_education,
      gradeofmarks,
      yearofadmission,
      yearofpassing,
      current_status,
      category,
      seatType,
      branch,
      admittedtoacademicyear,
    ],
    (err, result) => {
      if (err) {
        console.error("An error occurred:", err);
        res
          .status(500)
          .json({ success: false, message: "Internal Server Error" });
      } else {
        res.status(200).json({ success: true, result: result }); // Set the response code to 200 (OK)
      }
      res.end(); // Close the connection
    }
  );
});

app.listen(port, () => {
  console.log(`running backend server on ${port}`);
});
