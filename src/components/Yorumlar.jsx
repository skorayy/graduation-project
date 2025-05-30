import React from 'react'
import YorumlarCard from '../layouts/YorumlarCard'
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";

const Yorumlar = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
        <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
            Müşteri Yorumları
        </h1>
        <div className=" flex flex-col md:flex-row gap-5 mt-5">
            <YorumlarCard img={img1} name="Ayşe Yılmaz"/>
            <YorumlarCard img={img2} name="Ali Özcan" />
        </div>
    </div>
  )
}

export default Yorumlar