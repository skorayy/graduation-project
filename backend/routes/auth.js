const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "gizliAnahtar";

// KAYIT OL
router.post("/register", async (req, res) => {
  const { email, password, name, surname } = req.body;

  if (!email || !password || !name || !surname) {
    return res.status(400).json({ message: "Tüm alanlar zorunludur." });
  }

  try {
    const mevcutKullanici = await User.findOne({ email });
    if (mevcutKullanici) {
      return res.status(400).json({ message: "Bu email zaten kayıtlı" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const yeniKullanici = await User.create({
      email,
      password: hashedPassword,
      name,
      surname
    });

    const token = jwt.sign({ id: yeniKullanici._id }, JWT_SECRET);
    res.status(201).json({ message: "Kullanıcı başarıyla oluşturuldu", token });
  } catch (err) {
    console.error("Register hatası:", err);
    res.status(500).json({ message: "Sunucu hatası" });
  }
});


// GİRİŞ
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Email bulunamadı." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Şifre yanlış." });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: "2h",
    });

    res.json({ token });
  } catch (err) {
    console.error("Giriş hatası:", err);
    res.status(500).json({ message: "Sunucu hatası." });
  }
});

module.exports = router;
