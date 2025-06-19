import React from "react";
import UbiLogo from "../assets/img/logo_ubi_orange.png"; 

const About = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-20"
      style={{
        backgroundImage: "url('/assets/img/bg.jpg')", // arka plan resminin yolu
      }}
    >
      <div className="bg-white bg-opacity-90 p-10 rounded-xl shadow-lg max-w-3xl text-center">
        <img
          src={UbiLogo}
          alt="UBİ Logo"
          className="w-24 h-24 mx-auto mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Hakkımızda</h1>
        <p className="text-gray-700 whitespace-pre-line leading-relaxed text-lg">
          UBİ, keşfetmeyi sevenler için geliştirilen modern bir restoran keşif uygulamasıdır.

          {"\n\n"}En sevdiğiniz mekanları kolayca bulun, yeni lezzetleri deneyimleyin ve kendi gastronomi yolculuğunuzu başlatın. 
          Sadeliği, şıklığı ve kullanıcı dostu tasarımıyla UBİ, şehirdeki en iyi lezzet duraklarını parmaklarınızın ucuna getiriyor.

          {"\n\n"}Biz; kullanıcı deneyimini en üst seviyeye çıkarmayı, yerel işletmeleri desteklemeyi ve yemek tutkunlarını en iyi mekanlarla buluşturmayı hedefliyoruz.

          {"\n\n"}✨ Ubi ile keşfet, tat ve paylaş.
        </p>
      </div>
    </div>
  );
};

export default About;
