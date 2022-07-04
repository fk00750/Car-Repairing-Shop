const mongoose = require("mongoose");
const shopDATA_model = require("../models/shopDATA_model");

////

// Get all car data

const getAllData = async (req, res) => {
  const getAllCars_data = await shopDATA_model.find({}).sort({ createdAt: -1 }); // decreasing order (newest first)
  res.status(200).json(getAllCars_data);
};

////////////////////////////////////////

// Get a single data

const getSingleData = async (req, res) => {
  const { id } = req.params;
  // 62c2e0e5171710ffd7b10365

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Car ID is not valid" });
  }

  const signleCar_data = await shopDATA_model.findById(id);

  if (!signleCar_data) {
    return res.status(404).json({ error: "Car not found" });
  }

  res.status(200).json(signleCar_data);
};

////////////////////////////////////////

// Post or send a new data into database
// Create a new car data

const createNew_data = async (req, res) => {
  const { title, bill } = req.body;

  try {
    const carData = await shopDATA_model.create({ title, bill });
    res.status(200).json(carData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

////////////////////////////////////////

// Delete data from database

const delData = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Car ID is not valid" });
  }

  const delCar = await shopDATA_model.findOneAndDelete({ _id: id });

  if (!delCar) {
    return res.status(404).json({ error: "Car not found" });
  }

  res.status(200).json(delCar);
};

////////////////////////////////////////

// Update data from database

const updateData = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Car ID is not valid" });
  }

  const updateCar = await shopDATA_model.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!updateCar) {
    return res.status(404).json({ error: "Car not found" });
  }

  res.status(200).json(updateCar);
};

module.exports = {
  getAllData,
  getSingleData,
  createNew_data,
  delData,
  updateData,
};
