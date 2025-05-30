import React from "react";
import Button from "../layouts/Button";


const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/Ana1.jpeg')] bg-cover bg-no-repeat ">
      <div  className=" w-full lg:w-2/3 space-y-5 text-white" >
        <h1 className="text-backgroundColor font-semibold text-6xl">WELCOME</h1>
        <p className=" text-backgroundColor">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,
          libero? Minus consequuntur nihil veniam itaque suscipit quis impedit
          pariatur alias natus, harum ratione exercitationem quos. Dolorem ab
          cum voluptatem. Magni.
        </p>
        <div className=" lg:pl-44" >
        <Button title="Mekan Ara" />
        </div>
      </div>
    </div>
  );
};

export default Home;
