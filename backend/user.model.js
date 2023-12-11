// models/UserModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String, // On stocke l'ID de l'avatar provenant de File Nest
  },
  projects: {
    type: [String], // On stocke les ID des projets provenant de File Nest
  },
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
