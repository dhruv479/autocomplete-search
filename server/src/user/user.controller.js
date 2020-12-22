const UserModel = require('./user.model');

// ---------------------   ADD USER CONTROLLER    ----------------------------
const addUserController = async (req, res, next) => {
  try {
    await UserModel.create(req.body); // Add users in DB

    return res.status(200).json({
      success: true,
      message: 'Users created',
    });
  } catch (err) {
    next(err);
  }
};

// ----------------------------   SEARCH USER CONTROLLER    ----------------------------
const searchUserController = async (req, res, next) => {
  try {
    const { text } = req.query;
    let query = {};
    if (text) {
      query = { name: { $regex: text, $options: 'gi' } }; // Use of regex for better query results
    }

    const users = await UserModel.find(query).lean(); // Query user in DB

    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { addUserController, searchUserController };
