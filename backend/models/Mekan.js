const mongoose = require("mongoose");

const mekanSchema = new mongoose.Schema({
  title: String,
  kategori: String,
  konum: String,
  adres: String,
  imageUrl: String,
  koordinat: {
    lat: Number,
    lng: Number
  },
  rating: Number
});

module.exports = mongoose.model("Mekan", mekanSchema);
