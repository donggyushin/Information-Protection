import express from "express";
import multer from "multer";
import mysql from "mysql";
import mysqlKey from "../../keys/mysqlKey";
const upload = multer();

const connection = mysql.createConnection(mysqlKey);

const router = express.Router();

router.post("/login", upload.array(), (req, res, next) => {
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  const sql = "INSERT INTO user(username, password) VALUES(?,?)";
  const post = [username, password];
  connection.query(sql, post, (err, results, fields) => {
    if (err) {
      console.log(err);
      return res.json({
        ok: false,
        message: "Error occured in Database System, sorry for inconvenience",
        loading: false
      });
    }
    return res.json({
      ok: true,
      loading: true,
      message: ""
    });
  });
});

export default router;
