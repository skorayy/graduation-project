import React from "react";
import Button from "../layouts/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleMekanAra = () => {
    navigate("/mekanlar");
  };

  return (
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/Ana1.jpeg')] bg-cover bg-no-repeat">
      <div className="w-full lg:w-2/3 space-y-5 text-white">
        <h1 className="text-backgroundColor font-semibold text-6xl">HOŞ GELDİNİZ</h1>
        <div className="lg:pl-44">
          <Button title="Mekan Ara" onClick={handleMekanAra} />
        </div>
      </div>
    </div>
  );
};

export default Home;
