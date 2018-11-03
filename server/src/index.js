import express from "express";
import bodyParser from "body-parser";
import api from "./routes/api";
import mysql from "mysql";
import mysqlKey from "../keys/mysqlKey";
import multer from "multer";
const upload = multer();

const app = express();

const port = 8080;

//db connection
const connection = mysql.createConnection(mysqlKey);

connection.connect();

connection.query("select * from test", (err, results, fields) => {
  if (err) throw error;
  console.log(results);
});

connection.end();

//SERVE STATIC FILES = REACT PROJECT
app.use("/", express.static(__dirname + "/../../client/build"));

//middlewares
app.use(bodyParser.json());

//router
app.use("/api", api);

app.listen(port, () => {
  console.log("Express server is listening on port", port);
});
export { connection, upload };
