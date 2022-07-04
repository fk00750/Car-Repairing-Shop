const express = require("express");
const mongoose = require("mongoose");
// http://localhost:5000/api/CarData

const app = express();

const PORT = 5000;

const MONG_URI = "";

// handle CORS
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const repairShop_routes = require("./routes/shopRoutes");

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});


app.use("/api/CarData", repairShop_routes);


app.listen(PORT, console.log(`Server is running on PORT -> ${PORT}`));
// Connect to db
// mongoose
//   .connect(MONG_URI)
//   .then(() => {
//   })
//   .catch((err) => console.log(err));
