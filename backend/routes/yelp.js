const express = require("express");
const router = express.Router();
const axios = require("axios");
const Mekan = require("../models/Mekan");

const YELP_API_KEY = process.env.YELP_API_KEY;
const YELP_BASE_URL = "https://api.yelp.com/v3/businesses/search";

const locations = [
  { city: "Kadıköy", limit: 30 },
  { city: "Sarıyer", limit: 30 },
  { city: "Beşiktaş", limit: 30 }
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

      for (let biz of businesses) {
        const mekan = {
          title: biz.name,
          kategori: biz.categories[0]?.title || "Bilinmiyor",
          konum: loc.city,
          adres: biz.location.display_address.join(", "),
          koordinat: {
            lat: biz.coordinates.latitude,
            lng: biz.coordinates.longitude,
          },
          imageUrl:
            biz.image_url ||
            `https://via.placeholder.com/300x200?text=${encodeURIComponent(biz.name)}`,
          rating: biz.rating,
        };

        const mevcut = await Mekan.findOne({
          title: mekan.title,
          konum: mekan.konum,
        });

        if (!mevcut) {
          await Mekan.create(mekan);
        }
      }
    }

    res.json({ message: "Yelp verileri başarıyla içeri aktarıldı!" });
  } catch (err) {
    console.error("Yelp veri çekme hatası:", err.message);
    res.status(500).json({ message: "Yelp verisi alınamadı." });
  }
});

module.exports = router;
