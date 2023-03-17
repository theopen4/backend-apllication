const mongoose = require('mongoose')
const thingSchema = mongoose.Schema({
    name: { type: String, required: true },
    hp: { type: Number, required: true },
    cp: { type: Number, required: true },
    picture: { type: String, required: true },
    types: { type: String, required: true },
  });
  module.exports = mongoose.model('Thing', thingSchema);