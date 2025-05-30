const mongoose = require("mongoose");

const mekanSchema = new mongoose.Schema({
  title: String,
  kategori: String,
  konum: String,
  imageUrl: String,
});

module.exports = mongoose.model("Mekan", mekanSchema);
