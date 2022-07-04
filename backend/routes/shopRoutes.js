const router = require("express").Router();
const {
  getAllData,
  getSingleData,
  createNew_data,
  delData,
  updateData,
} = require("../controllers/shopController");

// Get all data

router.get("/", getAllData);

////////////////////////////////////////

// Get single data

router.get("/:id", getSingleData);

////////////////////////////////////////

// Post data

router.post("/", createNew_data);

////////////////////////////////////////

// Delete data

router.delete("/:id", delData);

////////////////////////////////////////

// Update (patch) data

router.patch("/:id", updateData);

////////////////////////////////////////

module.exports = router;
