const express = require("express");
const router = express.Router();
const Mekan = require("../models/Mekan");

// Tüm mekanları getir
router.get("/", async (req, res) => {
  try {
    const mekanlar = await Mekan.find();
    res.json(mekanlar);
  } catch (err) {
    console.error("Veri çekme hatası:", err);
    res.status(500).json({ message: "Veri çekilemedi." });
  }
});

// Belirli bir mekanı ID ile getir
router.get("/:id", async (req, res) => {
  try {
    const mekan = await Mekan.findById(req.params.id);
    if (!mekan) {
      return res.status(404).json({ message: "Mekan bulunamadı." });
    }
    res.json(mekan);
  } catch (err) {
    console.error("Mekan detay hatası:", err);
    res.status(500).json({ message: "Sunucu hatası." });
  }
});

module.exports = router;
