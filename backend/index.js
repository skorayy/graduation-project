const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const yelpRoutes = require("./routes/yelp");
const authRoutes = require("./routes/auth");
const Mekan = require("./models/Mekan");
const mekanlarRoute = require("./routes/mekanlar");
const app = express();
const PORT = 5000;


app.use(cors({ origin: true, credentials: true })); 
app.use(express.json());

// Routes
app.use("/api/yelp", yelpRoutes);
app.use("/api", authRoutes);
app.use("/api/mekanlar", mekanlarRoute);

// Basit test endpoint
app.get("/", (req, res) => {
  res.send("Backend API çalışıyor!");
});

// MongoDB bağlantısı 
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB bağlantısı başarılı 🚀"))
  .catch((err) => console.error("Mongo bağlantı hatası:", err));



// Sunucu başlatma
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor.`);
});

