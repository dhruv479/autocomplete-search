const { Schema, model } = require('mongoose');

const UserModel = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
    },

    items: {
      type: [String],
      required: true,
    },

    address: {
      type: String,
      required: true,
      minlength: 5,
    },

    pincode: {
      type: String,
      required: true,
      length: 6,
    },

    id: {
      type: String,
      required: true,
    },
  },
  {
    minimize: true,
    timestamps: true,
  }
);

module.exports = model('user', UserModel);
