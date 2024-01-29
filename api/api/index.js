const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router =require('./routes/index.js');
const cors = require('./middlewares/cors.js');

dotenv.config();

// TODO global error handler
// TODO cors error handler

const {MONGO_URL} = process.env;
mongoose
  .connect('mongodb://127.0.0.1:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB connection is successful"))
  .catch((err) => {
    console.error(err);
  });

app.use(cors);
app.use(express.json());
app.use(router);


console.log(router, 88888)
app.listen(8800, () => {
  console.log("server is running!");
});
