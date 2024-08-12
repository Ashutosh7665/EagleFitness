// models/form.js
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  membershipType: { type: String, enum: ['basic', 'premium', 'vip'], required: true },
  address: { type: String, required: true },
  termsAccepted: { type: Boolean, required: true },
});

module.exports = mongoose.model('form', formSchema);
