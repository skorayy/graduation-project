const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const yelpRoutes = require("./routes/yelp");
const Mekan = require("./models/Mekan");
const authRoutes = require("./routes/auth");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/yelp", yelpRoutes);

app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend API çalışıyor!");
});
// MongoDB bağlantısı
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB bağlantısı başarılı 🚀"))
  .catch((err) => console.error("Mongo bağlantı hatası:", err));

  app.get("/api/mekanlar", async (req, res) => {
    try {
      const mekanlar = await Mekan.find();
      res.json(mekanlar);
    } catch (err) {
      console.error("Veri çekme hatası:", err);
      res.status(500).json({ message: "Veri çekilemedi." });
    }
  });

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor.`);
});

