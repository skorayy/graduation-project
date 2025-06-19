import React from "react";
import { Link } from "react-router-dom";

const MekanlarCard = ({ id, img, title, kategori, konum }) => {
  return (
    <Link to={`/mekan/${id}`} className="w-72 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={img || "https://via.placeholder.com/300x200?text=Resim+Yok"}
        alt={title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">Kategori: {kategori}</p>
        <p className="text-gray-600">Konum: {konum}</p>
      </div>
    </Link>
  );
};

export default MekanlarCard;
