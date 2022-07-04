const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shopDATA_Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    bill: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("RepairShop", shopDATA_Schema);
