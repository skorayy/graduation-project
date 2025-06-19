// require("dotenv").config();
// const mongoose = require("mongoose");
// const fetch = require("node-fetch");
// const Mekan = require("./models/Mekan");

// const YELP_API_KEY = process.env.YELP_API_KEY;
// const MONGO_URI = process.env.MONGO_URI;

// const updateCoordinates = async () => {
//   try {
//     await mongoose.connect(MONGO_URI);
//     console.log("MongoDB bağlantısı kuruldu ✅");

//     const mekanlar = await Mekan.find({ latitude: { $exists: false } });

//     for (const mekan of mekanlar) {
//       const query = mekan.title + " " + mekan.konum;

//       const yelpRes = await fetch(`https://api.yelp.com/v3/businesses/search?location=İstanbul&term=${encodeURIComponent(query)}`, {
//         headers: {
//           Authorization: `Bearer ${YELP_API_KEY}`,
//         },
//       });

//       const yelpData = await yelpRes.json();
//       const result = yelpData.businesses?.[0];

//       if (result && result.coordinates) {
//         mekan.latitude = result.coordinates.latitude;
//         mekan.longitude = result.coordinates.longitude;
//         await mekan.save();
//         console.log(`✅ ${mekan.title} → Koordinatlar güncellendi`);
//       } else {
//         console.log(`⚠️ ${mekan.title} için sonuç bulunamadı`);
//       }
//     }

//     mongoose.disconnect();
//     console.log("Koordinat güncelleme tamamlandı 🚀");

//   } catch (err) {
//     console.error("Hata oluştu ❌:", err);
//   }
// };

// updateCoordinates();
