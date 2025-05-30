const express = require("express");
const router = express.Router();
const axios = require("axios");
const Mekan = require("../models/Mekan");

// Yelp API ayarları
const YELP_API_KEY = process.env.YELP_API_KEY;
const YELP_BASE_URL = "https://api.yelp.com/v3/businesses/search";
  
const locations = [
    { city: "Sarıyer", limit: 20 },
    { city: "Kadıköy", limit: 20 }
  ];
  router.get("/import", async (req, res) => {
    try {
      for (let loc of locations) {
        const response = await axios.get(YELP_BASE_URL, {
          headers: {
            Authorization: `Bearer ${YELP_API_KEY}`,
          },
          params: {
            location: loc.city,
            categories: "restaurants",
            limit: loc.limit,
          },
        });
  
        const businesses = response.data.businesses;
  
        const mekanlar = businesses.map((biz) => ({
          title: biz.name,
          kategori: biz.categories[0]?.title || "Bilinmiyor",
          konum: loc.city,
          imageUrl:
            biz.image_url ||
            `https://via.placeholder.com/300x200?text=${encodeURIComponent(biz.name)}`,
        }));
  
        for (let mekan of mekanlar) {
          const mevcut = await Mekan.findOne({
            title: mekan.title,
            konum: mekan.konum,
          });
          if (!mevcut) {
            await Mekan.create(mekan);
          }
        }
      }
  
      // ✅ for döngüsü tamamlandıktan sonra response dön
      res.json({ message: "Yelp verileri başarıyla içeri aktarıldı!" });
    } catch (err) {
      console.error("Yelp veri çekme hatası:", err.message);
      res.status(500).json({ message: "Yelp verisi alınamadı." });
    }
  });
  

module.exports = router;
