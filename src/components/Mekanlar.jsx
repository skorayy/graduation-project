import React, { useEffect, useState } from "react";
import MekanlarCard from "../layouts/MekanlarCard";
import { FiFilter } from "react-icons/fi";

const Mekanlar = () => {
  const [mekanlar, setMekanlar] = useState([]);
  const [konumFiltre, setKonumFiltre] = useState("Hepsi");
  const [kategoriFiltre, setKategoriFiltre] = useState("Hepsi");
  const [filtreGoster, setFiltreGoster] = useState(false);
  const [kategoriler, setKategoriler] = useState([]);
  const [konumlar, setKonumlar] = useState([]);


  useEffect(() => {
    console.log("USEEFFECT ÇALIŞTI");
    // Backend'den mekan verilerini çek
    fetch("http://localhost:5000/api/mekanlar")
    .then((res) => {
      console.log("Cevap geldi mi?", res);
      return res.json();
    })
    .then((data) => {
      console.log("Gelen mekan verisi:", data);
      setMekanlar(data);
      //Dinamik konum 
      const benzersizKonumlar = [...new Set(data.map((mekan) => mekan.konum))];
      setKonumlar(benzersizKonumlar);


      // Gelen verilerden benzersiz kategorileri ayıkla
      const benzersizKategoriler = [
        ...new Set(data.map((mekan) => mekan.kategori)),
      ];
      setKategoriler(benzersizKategoriler);
    })
    .catch((err) => console.error("Veri çekme hatası:", err));
  }, []);
  
  const filtrelenmisMekanlar = mekanlar.filter((mekan) => {
    const konumUygun = konumFiltre === "Hepsi" || mekan.konum === konumFiltre;
    const kategoriUygun = kategoriFiltre === "Hepsi" || mekan.kategori === kategoriFiltre;
    return konumUygun && kategoriUygun;
  });

  return (
    <div className="min-h-screen lg:px-32 px-5 py-20 relative">
      

      {/* Başlık + Filtre butonu */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Mekanlar</h1>
        <button
          onClick={() => setFiltreGoster(!filtreGoster)}
          className="flex items-center gap-2 px-4 py-1 border border-gray-300 rounded-full hover:bg-gray-100 transition"
        >
          <FiFilter />
          <span>All</span>
        </button>
      </div>
       
       {/* Filtre Paneli */}
      {filtreGoster && (
        <div className="fixed right-5 top-24 bg-white border p-6 rounded-xl shadow-xl z-[999] max-w-sm">
          <div className="mb-4">
            <h3 className="font-bold text-lg mb-2">Konum</h3>
            <div className="flex gap-2 flex-wrap">
              {["Hepsi",...konumlar].map((konum) => (
                <button
                  key={konum}
                  onClick={() => setKonumFiltre(konum)}
                  className={`px-3 py-1 rounded-full border ${
                    konumFiltre === konum
                      ? "bg-brightColor text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {konum}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Kategori</h3>
            <div className="flex gap-2 flex-wrap">
              {["Hepsi", ...kategoriler].map((kategori) => (
                <button
                  key={kategori}
                  onClick={() => setKategoriFiltre(kategori)}
                  className={`px-3 py-1 rounded-full border ${
                    kategoriFiltre === kategori
                      ? "bg-brightColor text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {kategori}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/*Mekan Kartları */}
      <div className="flex flex-wrap gap-8 justify-center mt-8">
        {filtrelenmisMekanlar.length === 0 ? (
          <p className="text-gray-500">Yüklenecek mekan bulunamadı.</p>
        ) : (
          filtrelenmisMekanlar.map((mekan) => (
            <MekanlarCard
              key={mekan._id}
              title={mekan.title}
              img={
                mekan.imageUrl ||
                "https://via.placeholder.com/300x200?text=" + encodeURIComponent(mekan.title)
              }
              kategori={mekan.kategori}
              konum={mekan.konum}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Mekanlar;
