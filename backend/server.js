const express = require("express");
const mongoose = require("mongoose");
// http://localhost:5000/api/CarData

const app = express();

const PORT = 5000;

const MONG_URI =
  "mongodb+srv://MisterShore007:Qazplmvb56123@cluster0.hmcmam5.mongodb.net/?retryWrites=true&w=majority";

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

// Connect to db
mongoose
  .connect(MONG_URI)
  .then(() => {
    app.listen(PORT, console.log(`Server is running on PORT -> ${PORT}`));
  })
  .catch((err) => console.log(err));
