const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  username: {
    type: String,
    required: [true, 'Please add an username'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
  },
  role: {
    type: String,
    required: [true, 'Please add a role']
  }
}, {
  timestamps: true,
});

// Hash the password before saving the user
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

module.exports = User;
