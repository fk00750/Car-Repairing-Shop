// Get all data

const getAllData = async (req, res) => {
  res.status(200).json({ msg: "welcome to repair shop !!!" });
};

////////////////////////////////////////

// Get a single data

const getSingleData = (req, res) => {
  const { id } = req.params;

  res.status(200).json({ msg: `Here is your data :: ${id}` });
};

////////////////////////////////////////

// Post or send a new data into database

const createNew_data = (req, res) => {
  const { title, bill } = req.body;

  res.status(200).json(`New data is added :: ${title} and ${bill}`);
};

////////////////////////////////////////

// Delete data from database

const delData = (req, res) => {
  const { id } = req.params;

  res.status(200).json({ msg: `Deleted data :: ${id}` });
};

////////////////////////////////////////

// Update data from database

const updateData = (req, res) => {
  const { id } = req.params;

  res.status(200).json({ msg: `updated data :: ${id}` });
};

module.exports = {
  getAllData,
  getSingleData,
  createNew_data,
  delData,
  updateData
};
