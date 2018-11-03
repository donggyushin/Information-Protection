import express from "express";
import bodyParser from "body-parser";
import api from "./routes/api";

const app = express();

const port = 8080;

//middlewares

app.use(bodyParser.json());

//router
app.use("/", api);

app.listen(port, () => {
  console.log("Express server is listening on port", port);
});
