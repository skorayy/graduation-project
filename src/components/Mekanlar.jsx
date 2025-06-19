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
  const [siralamaTipi, setSiralamaTipi] = useState("varsayilan");

  useEffect(() => {
    fetch("http://localhost:5000/api/mekanlar")
      .then((res) => res.json())
      .then((data) => {
        setMekanlar(data);
        setKonumlar([...new Set(data.map((mekan) => mekan.konum))]);
        setKategoriler([...new Set(data.map((mekan) => mekan.kategori))]);
      })
      .catch((err) => console.error("Veri çekme hatası:", err));
  }, []);

  const filtrelenmisMekanlar = mekanlar.filter((mekan) => {
    const konumUygun = konumFiltre === "Hepsi" || mekan.konum === konumFiltre;
    const kategoriUygun =
      kategoriFiltre === "Hepsi" || mekan.kategori === kategoriFiltre;
    return konumUygun && kategoriUygun;
  });

  const siraliMekanlar = [...filtrelenmisMekanlar].sort((a, b) => {
    if (siralamaTipi === "puanAzdanCok") {
      return (a.rating || 0) - (b.rating || 0);
    } else if (siralamaTipi === "puanCoktanAz") {
      return (b.rating || 0) - (a.rating || 0);
    }
    return 0;
  });

  return (
    <div className="min-h-screen lg:px-32 px-5 pt-24 relative">
      {/* Başlık + Filtre + Sıralama */}
      <div className="flex justify-between items-center mb-6 relative z-20">
        <h1 className="text-3xl font-bold">Mekanlar</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setFiltreGoster(!filtreGoster)}
            className="flex items-center gap-2 px-4 py-1 border border-gray-300 rounded-full hover:bg-gray-100 transition bg-white"
          >
            <FiFilter />
            <span>Filtrele</span>
          </button>

          <select
            value={siralamaTipi}
            onChange={(e) => setSiralamaTipi(e.target.value)}
            className="px-4 py-1 border border-gray-300 rounded-full bg-white text-gray-700"
          >
            <option value="varsayilan" hidden >Sırala</option>
            <option value="puanCoktanAz">En Yüksek Oy Alan</option>
            <option value="puanAzdanCok">En Düşük Oy Alan</option>
          </select>
        </div>
      </div>

      {/* Filtre Paneli */}
      {filtreGoster && (
        <div className="absolute right-0 top-30 bg-white border p-6 rounded-xl shadow-xl z-10 max-w-sm">
          <div className="mb-4">
            <h3 className="font-bold text-lg mb-2">Konum</h3>
            <div className="flex gap-2 flex-wrap">
              {["Hepsi", ...konumlar].map((konum) => (
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

      {/* Mekan Kartları */}
      <div className="flex flex-wrap gap-8 justify-center mt-8">
        {siraliMekanlar.length === 0 ? (
          <p className="text-gray-500">Yüklenecek mekan bulunamadı.</p>
        ) : (
          siraliMekanlar.map((mekan) => (
            <MekanlarCard
              key={mekan._id}
              id={mekan._id}
              title={mekan.title}
              img={
                mekan.imageUrl ||
                "https://via.placeholder.com/300x200?text=" +
                  encodeURIComponent(mekan.title)
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
