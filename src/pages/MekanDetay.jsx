// components/MekanDetay.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MapPin } from "lucide-react";

const MekanDetay = () => {
  const { id } = useParams();
  const [mekan, setMekan] = useState(null);

  useEffect(() => {
    const fetchMekan = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/mekanlar/${id}`);
        const data = await res.json();
        console.log("Gelen veri:", data);
        setMekan(data);
      } catch (err) {
        console.error("Mekan detayı çekilemedi:", err);
      }
    };

    fetchMekan();
  }, [id]);

  if (!mekan) {
    return <div className="text-center mt-10">Yükleniyor...</div>;
  }

  const googleMapsUrl = mekan.koordinat
    ? `https://www.google.com/maps?q=${mekan.koordinat.lat},${mekan.koordinat.lng}`
    : "#";

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl">
        <img
          src={mekan.imageUrl || "https://via.placeholder.com/400x300"}
          alt={mekan.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{mekan.title}</h1>
        <p className="text-gray-700 mb-1">
          <strong>Kategori:</strong> {mekan.kategori}
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Semt:</strong> {mekan.konum}
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Açık Adres:</strong> {mekan.adres || "Bilinmiyor"}
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Puan:</strong> {mekan.rating || "Bilinmiyor"}
        </p>

        {mekan.koordinat && (
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-blue-600 hover:underline"
          >
            <MapPin className="w-5 h-5 mr-1" />
            Haritada Göster
          </a>
        )}
      </div>
    </div>
  );
};

export default MekanDetay;
